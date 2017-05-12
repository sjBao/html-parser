namespace :start do
  task :development do
    exec 'foreman -start -f Profile.dev'
  end
end

task :start => 'start:development'