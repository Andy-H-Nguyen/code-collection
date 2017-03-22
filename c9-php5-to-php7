# Install phpbrew
sudo apt-get update
sudo apt-get install libmcrypt-dev
curl -L -O https://github.com/phpbrew/phpbrew/raw/master/phpbrew
chmod +x phpbrew
sudo mv phpbrew /usr/local/bin/
phpbrew init

[[ -e ~/.phpbrew/bashrc ]] && source ~/.phpbrew/bashrc

# Install php7
phpbrew lookup-prefix ubuntu
phpbrew install 7.0 +default
phpbrew switch php-7.0.1
phpbrew use php-7.0.1

# Install php7 module for apache
sudo add-apt-repository ppa:ondrej/php -y
sudo apt-get update -y

sudo apt-get install php7.0-curl php7.0-dev php7.0-gd php7.0-intl php7.0-mcrypt php7.0-json php7.0-mysql php7.0-opcache php7.0-bcmath php7.0-mbstring php7.0-soap php7.0-xml -y

sudo apt-get install libapache2-mod-php7.0 -y

# Switch apache module
sudo a2dismod php5
sudo a2enmod php7.0
