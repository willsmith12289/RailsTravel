class AddAttachmentDocumentToEvents < ActiveRecord::Migration
  def self.up
    change_table :events do |t|
      t.attachment :document
    end
  end

  def self.down
    remove_attachment :events, :document
  end
end
