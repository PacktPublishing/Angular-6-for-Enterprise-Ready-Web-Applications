$packageName= 'SpringToolSuite' # arbitrary name for the package, used in messages
$packageVersion = '3.9.0'
$commonUrl  = "http://download.springsource.com/release/STS/$packageVersion.RELEASE/dist/e4.7/spring-tool-suite-$packageVersion.RELEASE-e4.7.0-win32"
$url        = "$commonUrl.zip"
#$url64      = "$commonUrl-x86_64.zip"

$filePath = "c:\tools\$packageName.$packageVersion.zip"
New-Item $filePath -type file -Force
Invoke-WebRequest -Uri $url -OutFile $filePath

Add-Type -assembly "system.io.compression.filesystem"
[io.compression.zipfile]::ExtractToDirectory($filePath, "C:\")

$global:installLocation = "C:\sts-bundle\sts-$packageVersion.RELEASE\STS.exe"

#https://gallery.technet.microsoft.com/scriptcenter/Create-a-start-menu-aca4e1ac
#requires -Version 2
Function Add-StartMenuShortcut 
{ 
  <# 
      .SYNOPSIS 
      Create a start menu shortcut 
  
      .DESCRIPTION 
      Create a start menu shortcut using the WScript.Shell comobject 
  
      .PARAMETER Version 
      Output version of this script 
  
      .PARAMETER Target 
      This property is for the shortcut's target path only.  
      Any arguments to the shortcut must be placed in the Argument's property. 
      Path to the target application for example C:\Tools\Utilities\Cmder\Cmder.exe 
  
      .PARAMETER AllUsers 
      Create the shortcut for all users 
  
      .PARAMETER Folder 
      Folder to in the start menu to create the shortcut if the folder does not exist it will be created 
  
      .PARAMETER Name 
      Name of the shortcut 
  
      .PARAMETER WorkingDirectory 
      Assign a working directory to a shortcut, or identifies the working directory used by a shortcut. 
  
      .PARAMETER Arguments 
      The arguments parameter can contain specific arguments to pass to the application being started by the shortcut. 
      For example you can make the target internet explorer 'C:\Program Files\Internet Explorer\iexplore.exe' then pass a URL with the argument parameter 'www.microsoft.com' 
    
  
      .PARAMETER Icon 
      A string that locates the icon. The string should contain a fully qualified path 
      Icon location this can either be an executable such as an exe, dll or a ico file. 
  
      .PARAMETER IconIndex 
      this is useful if the icon file has multiple icons you can specific the index of the icon to use this defaults to zero so it will use the first icon 
  
      .PARAMETER Description 
      The Description parameter contains a string value describing the shortcut. 
  
      .PARAMETER WindowStyle 
      Sets the window style for the program being run 
      1 Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. 
      3 Activates the window and displays it as a maximized window. 
      7 Minimizes the window and activates the next top-level window. 
  
      .PARAMETER HotKey 
      Assigns a key-combination to a shortcut, or identifies the key-combination assigned to a shortcut. 
      For example CTRL+SHIFT+F1 explorer will need to be restarted in order for the hotkey to take effect. 
  
      .PARAMETER RelativePath 
      Assigns a relative path to a shortcut, or identifies the relative path of a shortcut. 
  
      .PARAMETER ElevateShortcut 
      Set the shortcut to always run as administrator 
  
      .PARAMETER Force 
      Overwrite existing shortcut 
  
      .EXAMPLE 
      Create-StartMenuShortcut -Version 
      Describe what this call does 
  
      .EXAMPLE 
      Create-StartMenuShortcut -Name "Cmder" -Target "C:\Tools\Utilities\Cmder\Cmder.exe" -Folder "Cmder" -WorkingDirectory "C:\Tools" -Icon "C:\Tools\Utilities\Cmder\Cmder.exe" -IconIndex 0 -Description "Cmder Alternative Shell" -HotKey "CTRL+SHIFT+F1" -WindowStyle 1 -RelativePath "C:\Tools" -Force -Verbose -Debug 
  
      .NOTES 
      Author: Bevin Du Plessis 
  
      More info :https://msdn.microsoft.com/en-us/library/xk6kst2k(v=vs.84).aspx 
  
      .LINK 
      https://github.com/nightshade2109/powershellscripts 
  #> 
  
  
  [CmdletBinding()] 
  param( 
    [Parameter( 
        ParameterSetName = 'Version',HelpMessage='Output version of script', 
        Mandatory = $True 
    )] 
    [switch]$Version, 
  
    [Parameter( 
        ParameterSetName = 'Default',HelpMessage='Path to the target application', 
        Mandatory = $True 
    )] 
    [string]$Target, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [switch]$AllUsers, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $false 
    )] 
    [string]$Folder, 
  
    [Parameter( 
        ParameterSetName = 'Default',HelpMessage='Name of shortcut', 
        Mandatory = $True 
    )] 
    [string]$Name, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$WorkingDirectory = $null, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$Arguments = $null, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$Icon = $null, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [int]$IconIndex = 0, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$Description = $null, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [int]$WindowStyle = 1, 
  
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$HotKey = $null,         
                
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [string]$RelativePath = $null, 
        
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [bool]$ElevateShortcut = $False, 
        
    [Parameter( 
        ParameterSetName = 'Default', 
        Mandatory = $False 
    )] 
    [switch]$Force 
  ) 
    
  Begin { 
    Set-StrictMode -Version Latest 
        
    # Pass verbose and debug to child functions 
    if ($PSBoundParameters.ContainsKey('Debug')) 
    { 
      $script:DebugPreference = 'Continue' 
    } 
    else 
    { 
      $script:VerbosePreference = 'SilentlyContinue' 
    } 
        
    if ($PSBoundParameters.ContainsKey('Verbose')) 
    { 
      $script:VerbosePreference = 'Continue' 
    } 
    else 
    { 
      $script:VerbosePreference = 'SilentlyContinue' 
    } 
        
    ############################################################# 
    Write-Verbose -Message "Starting $($MyInvocation.Mycommand)" 
    ############################################################# 
        
  } 
    
  Process 
  { 
    
    $ScriptVersion = '0.1' 
        
    if ($Version.IsPresent) 
    { 
      $VersionResult = New-Object -TypeName PSObject -Property @{ 
        Version = $ScriptVersion 
      } 
          
      Write-Output -InputObject $VersionResult 
      return 
    }         
        
    ############################################################# 
    Write-Verbose -Message "Processing $($MyInvocation.Mycommand)" 
    ############################################################# 
        
    $Result = $null 
    $Results = $null 
        
        
    Try 
    { 
      If($AllUsers) 
      { 
        $BasePath = "$env:AllUsersProfile\Microsoft\Windows" 
      } 
      Else 
      { 
        $BasePath = "$env:USERPROFILE" 
      } 
            
      $Shortcut = "$BasePath\Start Menu\Programs\$Folder\$Name.lnk" 
            
      if((Test-Path -Path "$Shortcut") -and !($Force.IsPresent)) 
      { 
        Write-Verbose -Message "Shortcut $Shortcut exists" 
        Write-Error -Message 'Shortcut already exists use -Force parameter to overwrite.' 
        Return 
      } 
      if($Force.IsPresent) 
      { 
        Write-Verbose -Message "Removing '$Shortcut'" 
        Remove-Item -Path "$Shortcut" -Force -Confirm:$False -ErrorAction SilentlyContinue 
      } 
            
      if(!(Test-Path -Path "$BasePath\Start Menu\Programs\$Folder")) 
      { 
        Write-Verbose -Message "Creating Folder '$BasePath\Start Menu\Programs\$Folder'" 
        $null = New-Item -Path "$BasePath\Start Menu\Programs\$Folder" -ItemType Directory -Force 
      } 
            
      $WshShell = New-Object -ComObject WScript.Shell 
      $objShortCut = $WshShell.CreateShortcut($Shortcut) 
      $objShortCut.TargetPath = $Target 
            
      $objShortCut.Arguments = "$Arguments" 
            
      if($Icon -and $IconIndex -ne 0) 
      { 
        Write-Verbose -Message "Setting IconLocation to '$Icon,$IconIndex'" 
        $objShortCut.IconLocation = "$Icon,$IconIndex" 
      } 
      elseif($Icon) 
      { 
        $objShortCut.IconLocation = "$Icon,0" 
      } 
            
      $objShortCut.Description = "$Description" 
      $objShortCut.WorkingDirectory = "$WorkingDirectory" 
            
      if($WindowStyle -ne 1) 
      { 
        $objShortCut.WindowStyle = $WindowStyle 
      } 
                  
      if($HotKey) 
      { 
        Write-Verbose -Message 'Shorcut hotkey provided explorer will need to be restarted for it to take effect!' 
        $objShortCut.Hotkey = "$HotKey" 
      } 
            
      if($RelativePath) 
      { 
        Write-Verbose -Message "Setting RelativePath to '$RelativePath'" 
        $objShortCut.RelativePath  = "$RelativePath" 
      } 
              
      $null = $objShortCut.Save() 
            
            
      if($ElevateShortcut) 
      { 
        $bytes = [IO.File]::ReadAllBytes("$Shortcut") 
        $bytes[0x15] = $bytes[0x15] -bor 0x20 #set byte 21 (0x15) bit 6 (0x20) ON 
        [IO.File]::WriteAllBytes("$Shortcut", $bytes) 
      } 
            
      if(!(Test-Path -Path "$Shortcut")) 
      { 
        Write-Verbose -Message "Creating shortcut $Shortcut was unsuccessful" 
        Write-Error -Message 'Failed to create shortcut' 
        return 
      } 
      Write-Output -InputObject $objShortCut 
    } 
    Catch 
    { 
      Write-Warning -Message "Error was $_" 
      $line = $_.InvocationInfo.ScriptLineNumber 
      Write-Warning -Message "Error was in Line $line" 
      return 
    }   
        
        
    ############################################################# 
  } 
    
    
  End 
  { 
    if (!$Version.IsPresent) 
    { 
      ############################################################# 
      Write-Verbose -Message "Ending $($MyInvocation.Mycommand)" 
      ############################################################# 
    } 
  } 
}

Add-StartMenuShortcut -Name "STS" -Target "$global:installLocation" -Icon "$global:installLocation" -Description "Spring Tool Suite" -Force

Start-Process -FilePath $global:installLocation
