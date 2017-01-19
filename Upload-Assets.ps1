### Setup and Connect
Install-Module SharePointPnPPowerShellOnline
$siteUrl = "https://pnprocks.sharepoint.com/sites/publishing"
Connect-SPOnline –Url $siteUrl –Credentials (Get-Credential)


### inject javascript
Add-SPDevCustomAction -Url $siteUrl -Scope Web -Sequence 1000 -Script "~SiteCollection/Style Library/coolApp/coolApp.js"

### Inject alternate css
$web = Get-PnPWeb
$web.AlternateCssUrl = $web.ServerRelativeUrl + "/SiteAssets/hidePage.css"
$web.Update()

function Add-SPDevCustomAction{
	param(
		[Parameter(Mandatory=$True)]
		[string] $Url,
		[Parameter(Mandatory=$True)]
		[ValidateSet('Site','Web')]
		[string] $Scope,
		[Parameter(Mandatory=$True)]
		[string] $Script,
		[Parameter(Mandatory=$True)]
		[int] $Sequence
	)

	$context = Get-PnPContext

	if($Scope -eq "Web"){
		$web = $context.Web
		$context.Load($web);
		$context.ExecuteQuery();

		$customAction = $web.UserCustomActions.Add();
	} elseif ($Scope -eq "Site") {
		$site = $context.Site
		$context.Load($site);
		$context.ExecuteQuery();

		$customAction = $site.UserCustomActions.Add();
	}
	
	$customAction.Location = "ScriptLink";
	$customAction.ScriptSrc = $Script
	$customAction.Sequence = $Sequence;
	$customAction.Update();
	$context.ExecuteQuery();
}

function Upload-JavaScript() {
    $remoteAssetsPath = "Style Library\coolApp"
    $scriptBuildPath = "C:\Projects\angular\office365-angular-typescript-webpack\build\coolApp.js"
    Add-PnPFile -Path $scriptBuildPath -Folder $remoteAssetsPath -Checkout -Publish

    ## Optionally use CDN
}

Upload-JavaScript