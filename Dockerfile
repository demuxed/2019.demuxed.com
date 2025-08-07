FROM ruby:2.7
RUN gem install rubygems-update -v 3.3.22 && \
    update_rubygems && \
    gem install bundler -v 2.1.4 && \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs
WORKDIR /code
COPY . .
RUN bundle install
