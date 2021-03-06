require 'nokogiri'
require 'open-uri'

class Link < ApplicationRecord
  has_many :parsed_items, dependent: :destroy
  validates :url, :uniqueness => true

  def parse_content
    Nokogiri::HTML(open(self.url)).css('h1', 'h2', 'h3').map do |content|
      {
        tag_type: content.name,
        body: content.inner_text
      }
    end
  end
end
