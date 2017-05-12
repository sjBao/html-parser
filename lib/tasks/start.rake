namespace :start do
  task :development do
    exec 'forman -start -f Profile.dev'
  end
end

task :start => 'start:development'