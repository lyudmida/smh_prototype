# Launching the ios app version on the simulator
1. cd into the project folder and type the command "react-native run-ios".

# Common Git commands for pushing your changes
1. To add all the changes you've made and all the files from the project, type the command
"git add -A" or for a single specific file "git add [filename]"

2. To commit the changes and files you've added, type the command "git commit 'Description of your commit goes here'"

Aside: Shortcut command to add and commit in one command. Type "git commit -am 'Description of your commit goes here'".

3. Finally, to push your changes to a branch, type "git push origin [branchname]"

## Notes
Always check which branch you are on before you start working in the beginning or whenever you are pushing changes. To check which branch you are on,
type "git branch".

More git command - cheatsheet: https://gist.github.com/hofmannsven/6814451

# Merging a branch
1. When you are done working on a feature branch and ready to merge it, cd inside the main branch your are going to merge the feature branch into.

2. Once inside the main branch, merge the feature branch by typing the command "git merge [feature branch name]".

3. Push changes on the main branch to update to the github repository.

# Reset a branch to match an exact copy of another branch
Do not use git pull. That is used for merging. Instead use these commands step-by-step.

1. git fetch origin [branchname copying from]
2. git reset --hard FETCH_HEAD
3. git clean -df

# Can I put anything here?
## Taco Mustache
###Is this smaller?
