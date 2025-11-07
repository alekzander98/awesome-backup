export HOMEBREW_NO_AUTO_UPDATE=1
export ZSH="$HOME/.oh-my-zsh"

plugins=(
  # git
  zsh-completions
  zsh-autosuggestions
  fast-syntax-highlighting
)

# vim
alias vihosts="vi /etc/hosts"
alias vizsh="vi ~/.zshrc"
alias viespanso="vi ~/Documents/Espanso/base.yml"

# cat
alias cathosts="cat /etc/hosts"
alias catzsh="cat ~/.zshrc"
alias catespanso="cat ~/Documents/Espanso/base.yml"

# system
alias ~="cd ~"
alias ll='ls -alhG'
alias ls='ls -G'

# code
alias c='code .'
alias gl="git pull"
alias ga.="git add ."
alias gp="git push"

function pfd() {
  osascript 2> /dev/null <<EOF
  tell application "Finder"
    return POSIX path of (target of window 1 as alias)
  end tell
EOF
}
function mcd {
  mkdir $1 && cd $1;
}
function cdf() {
  cd "$(pfd)"
}


source $ZSH/oh-my-zsh.sh

export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
eval "$(starship init zsh)"

# bun completions
[ -s "/Users/ankang/.bun/_bun" ] && source "/Users/ankang/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
export PATH="$HOME/.npm-global/bin:$PATH"