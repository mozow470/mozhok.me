FROM node:16
USER root


# install required packages
RUN apt-get update && \
    apt-get -y install tree && \
    apt-get -y install curl

# if installed npm is older than latest version,
# install npm from NPM
RUN npm install -g npm@latest

# check node ver (nuxt3 requires 14 <= node <= 16)
RUN node --version

# set wrking dir
WORKDIR /opt/working

# check file structure
RUN ls -l -a & tree

# install dependeces packages
RUN yarn

# Port Mapping
