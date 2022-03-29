class WordSerializer < ActiveModel::Serializer
  attributes :id, :english, :spanish, :pos
end
