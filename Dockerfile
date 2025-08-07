FROM ruby:3.3
RUN gem install bundler \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs
WORKDIR /code
COPY . .
RUN bundle install
