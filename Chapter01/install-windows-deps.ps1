# Run this script in an elevated command shell, using 'Run as Administator'

$title = "Execute Installation Script"
$message = "Absolutely NO WARRANTIES or GUARANTEES are provided. Are you sure you want to continue?"

$yes = New-Object System.Management.Automation.Host.ChoiceDescription "&Yes", `
    "Execute script."

$no = New-Object System.Management.Automation.Host.ChoiceDescription "&No", `
    "Do not execute script."

$options = [System.Management.Automation.Host.ChoiceDescription[]]($yes, $no)

$result = $host.ui.PromptForChoice($title, $message, $options, 1)

switch ($result)
    {
        0 {
            # This script is intentionally kept simple to demonstrate basic automation techniques.
            Write-Output "Note: This script assumes a clean environment and therefore is not resilient."
            Write-Output "Installing chocolatey"
            Set-ExecutionPolicy AllSigned; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

            RefreshEnv.cmd

            Write-Output "Installing Git & GitHub Desktop"
            choco install git github-desktop -y
            $gitVersion = git --version
            Write-Output "git: $gitVersion"
            Write-Output "Verify installation of GitHub Desktop manually."

            Write-Output "Installing JDK8"
            choco install jdk8 -y
            $jdkVersion = java -version
            Write-Output "JDK: $jdkVersion"

            Write-Output "Installing NodeJS"
            choco install nodejs -y
            $nodeVersion = node -v
            Write-Output "Node: $nodeVersion"
            Write-Output "Remember to avoid odd numbered major Node releases. Keep 8.x.x, avoid 7.x.x."
            $npmVersion = npm -v
            Write-Output "npm: $npmVersion"

            Write-Output "Installing VS Code"
            choco install VisualStudioCode -y
            Write-Output "Verify installation of VS Code manually."

            Write-Output "Installing STS"
            Set-ExecutionPolicy ByPass; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://gist.githubusercontent.com/duluca/92ae050c774f79daff38e3e6a6a627e1/raw/0d211e4fe4738b176b9188d1e4b51adb5ce521d1/install-sts.ps1'))
            Write-Output "Verify installation of STS manually."
        }
    1 {"Aborted."}
}
