# Fair warning: This isn't actually used other than for local development if you don't have a Ruby env.
# Vercel builds outside docker.
FROM ruby:3.3
RUN gem install bundler \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs
WORKDIR /code
COPY . .
RUN bundle install
