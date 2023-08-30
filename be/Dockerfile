FROM python:3.11
SHELL ["/bin/bash", "-c"]
LABEL maintainer="Romeo Delinicolas <Romeo.Delinicolas@gmail.com>"

# Never prompts the user for choices on installation/configuration of packages
ENV DEBIAN_FRONTEND noninteractive
WORKDIR /application
RUN chown www-data:www-data /application
ENV PYTHONPATH $PYTHONPATH:/application
RUN apt-get --yes clean && apt-get -yqq --fix-missing update && apt-get -yqq install build-essential curl locales locate cron supervisor
RUN apt-get -yqq install libtbb-dev libgflags-dev libgoogle-glog-dev libgtest-dev libssl-dev git swig
RUN apt-get update
RUN apt-get -yqq install software-properties-common

# Pyodbc
RUN curl https://packages.microsoft.com/keys/microsoft.asc | APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1 apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get --yes update
RUN ACCEPT_EULA=Y apt-get -yqq install msodbcsql18 mssql-tools unixodbc-dev
RUN apt-get update -yqq \
    && apt-get install -y --no-install-recommends openssl \
    && sed -i 's,^\(CipherString[ ]*=\).*,\1'DEFAULT@SECLEVEL=1',g' /etc/ssl/openssl.cnf\
    && rm -rf /var/lib/apt/lists/*
WORKDIR /python-prod
COPY requirements.txt ./

ARG pip_install="python3.11 -m  pip install"

RUN ${pip_install} -U pip
RUN ${pip_install} pyodbc
RUN python3 -m pip list
RUN ${pip_install} -r requirements.txt
COPY chatgpt/ chatgpt/
COPY uts_website_extracted/ uts_website_extracted/

CMD python3.11 chatgpt/chatgpt.py "When is Census Date?"
