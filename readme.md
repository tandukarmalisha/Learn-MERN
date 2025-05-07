# MERN stack syllabus 
## Basics (JS Client approach / Server Approach)
- Basics js(syntax)
- Variables and Constants
- Data types
- Operators
- Control Statements
- Functions
 - Synchronous functions
 - Asynchronous functions
    - Promise Handling
        - then.catch
        - async-await
    - OOP
    - ES Standard
## GIT and use cases
## Node.js + Express (Application )
    - MVC Pattern
    - API (Ecommerce/)
    - Features of Express
    ### Database (NoSQL or SQL)
    - Integration with Express
    - Project API ------------------- 1st Project

# Frontend
    - Basics of HTML
    - CSS Basics
        - CSS Framework/library (Tailwindcss)
    - JS+TS(DOM Manipulation)
## Library (Reactjs)
    -.....
    - CMS Application ---------------- 2nd project
## Socket Programming
    - Real time communication
    - Chat Application --------------- 2.1 Project
## Nextjs Programming (for SEO on server side based on React)
    - React based framework ---------- 3rd Project

- 1project Submit to sir and broadway
    - Certificate 

- Agile process 
    - Sprint
## Git 
### Developers
    - Version Control
     
    - Code Maintenance or backup
### DevOps
    - Automation (deploy/ CI/ CD)
### Project Managers/ Leads
    - Tracking (Project Management)

### Our Decice and Online Repository
    - Local repo => Dev environment (git)
    - Online Repo => a. gitlab b. github c. bitbucket


### Structure
    - tree structure
    - Trunk (default Branch) (main or master)
    - History 

### SSH
- Private key, public key
- public key -------> server add
- Laptop ---> Internet -----> server
- <------ Connection req
    - yes

### Global Config
    - User Setup
     - 
    - 'git config --global user.name "<username>"'
    - 'git config --global user.email "<youremail@address>"'
    - Default Branch
        - 'git config --global default.branch "main"
    -pull strategy
        - 'git config --global pull.rebase true' --- Rebase
        - 'git config --global pull.rebase false' --- Merge (Accept or configure)
        - 'git config --global pull.ff'         ----- fast forward


### Git Commands
#### Initialize git in local repo
    - 'git init'
    - 'git remote add <name> <repoURL>' ------ add repoURL to our local repo

    - 'git remote set-url <name> <newUrl>' ------ replace the old url
    - 'git remote -v' ----- list all the available remote repo on our local repository

### Clone the project
- 'git clone <repoUrl>'

### Status
- 'git status'

### Branch list
- 'git branch'

#### Staging 
- Add tracking
    - 'git add </filename/.>'
- Do commit
    - 'git commit -m "<Message>"

### Push Operation
 - 'git push <repoName> <localBranchName>[;remoteBranch]'
   - e.g 'git push origin main:main'

### Pull Operation
- 'git pull <repoName> <remoteBranchName>'
    eg. "git pull origin main'"
- sometimes during pull, it might create some conflicts
    -Manually resolve the conflict
    - After resolving the conflict, commit the code

#### Branch operation
    - 'git checkout -b <branchName>' ---- create a branch
