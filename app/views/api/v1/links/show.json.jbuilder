json.set! :data do
  json.type       'link'
  json.id         @link.id
  json.url        @link.url
  json.created_at @link.created_at
  json.updated_at @link.updated_at
  json.parsed_content @link.parsed_items
end