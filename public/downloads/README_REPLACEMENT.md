This folder contains downloadable assets used by the site.

Task: Replace `School Demo Setup.exe` with a new file of the same name.

I attempted to remove the existing `School Demo Setup.exe` programmatically but could not delete it in this environment.

Please replace the file locally by doing one of the following:

1) Replace the file manually
- Copy your new `School Demo Setup.exe` into this folder (overwriting the existing file).

2) Replace via Git (recommended if you want the change tracked):

Open PowerShell in the repository root and run:

```powershell
# remove the old file from git and working tree
git rm "public/downloads/School Demo Setup.exe"
# add the new file (copy your new .exe into the folder first)
git add "public/downloads/School Demo Setup.exe"
# commit and push
git commit -m "Replace School Demo Setup.exe with updated installer"
git push origin main
```

Notes and recommendations:
- Large binaries in Git history can inflate repository size. If this file is large (many MBs), consider using Git LFS for binaries:

```powershell
# install Git LFS (if not already installed)
choco install git-lfs -y
# or follow Git LFS instructions for your OS
git lfs install
# track the exe by pattern
git lfs track "public/downloads/*.exe"
# add .gitattributes and commit
git add .gitattributes
```

- If you'd like, upload the new `School Demo Setup.exe` here (via chat file upload) or tell me its local path and I will commit it for you.

If you want me to create the commit once you place the new file, tell me and I'll run the `git` commands for you.