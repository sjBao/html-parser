require 'nokogiri'
require 'open-uri'

parsed_content =  Nokogiri::HTML(open(@link.url)).css('h1', 'h2', 'h3').map do |content|
  {
    tag_type: content.name,
    body: content.inner_text
  }
end

json.set! :data do
  json.type       'link'
  json.id         @link.id
  json.url        @link.url
  json.created_at @link.created_at
  json.updated_at @link.updated_at
  json.parsed_content parsed_content
end