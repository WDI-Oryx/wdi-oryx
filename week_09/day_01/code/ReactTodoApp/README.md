# Installing React in a Rails App

Add Gems to the Gemfile

```ruby
gem "webpacker"
gem "react-rails"
```

Run `bundle`

Install Webpack: `rails webpacker:install`

Install React: `rails webpacker:install:react`

Set up the file system for React: `rails g react:install`

To create React components: `rails g react:component App`
