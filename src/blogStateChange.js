if (api.originEntity.isDeleted) {
    return;
}
if (api.originEntity.name != "publish") { return }
const timeLineRoot = api.getNoteWithLabel("timeLineRoot");
const unpublishedRoot = api.getNoteWithLabel("unpublishedRoot");

const note = api.originEntity.getNote();
const publishStatus = note.getLabelValue("publish");
const category = note.getLabelValue("category");
const categoryNote = api.getNoteWithLabel("categoryName", category);

api.toggleNoteInParent(publishStatus === "true", note.noteId, timeLineRoot.noteId);
api.toggleNoteInParent(publishStatus === "true", note.noteId, categoryNote.noteId);
if (publishStatus === "false") {
    api.toggleNoteInParent(true, note.noteId, unpublishedRoot.noteId);
} else {
    if (unpublishedRoot.getChildNotes().some(ele => ele.noteId === note.noteId)) {
        api.toggleNoteInParent(false, note.noteId, unpublishedRoot.noteId);
    }
}

if (publishStatus === "true") {
    const content = note.getContent();
    note.setLabel("summary", extractTextFromHTML(content));
}
note.save();

function extractTextFromHTML(html) {
    var text = html.replace(/<[^>]*>/g, '');
    text = text.replace(/\s+/g, '');

    var extractedText = text.substring(0, 120);

    return `${extractedText}...`;
}