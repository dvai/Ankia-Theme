if (api.originEntity.isDeleted) {
    return;
}

if (api.originEntity.name != "publish") { return }
const note = api.originEntity.getNote();
const timeLineRoot = api.getNoteWithLabel("timeLineRoot");
const unpublishedRoot = api.getNoteWithLabel("unpublishedRoot");

const publishStatus = note.getLabelValue("publish");
const category = note.getLabelValue("category");
const categoryNote = api.getNoteWithLabel("categoryName", category);

const tags = note.getLabelValues("tags");
const lastTagString = note.getLabelValue("lastTags");
const tagsRoot = api.getNoteWithLabel("blogTagRoot");

if (category != "说说") {
    api.toggleNoteInParent(publishStatus === "true", note.noteId, timeLineRoot.noteId);
}
api.toggleNoteInParent(publishStatus === "true", note.noteId, categoryNote.noteId);
if (publishStatus === "false") {
    api.toggleNoteInParent(true, note.noteId, unpublishedRoot.noteId);
    if (lastTagString != null && lastTagString != undefined && lastTagString != "") {
        const lastTags = lastTagString.split("|");
        lastTags.forEach((lastTag) => {
            api.toggleNoteInParent(false, note.noteId, api.getNoteWithLabel("blogTag", lastTag).noteId);
            note.setLabel("lastTagString", "");
        })
    }
} else {
    const content = note.getContent();
    note.setLabel("summary", extractTextFromHTML(content));

    tags.forEach((tag) => {
        const tagNote = api.getNoteWithLabel("blogTag", tag);
        if (tagNote === null || tagNote === undefined || tagNote === "") {
            const resp = api.createTextNote(tagsRoot.noteId, tag, "");
            resp.note.setLabel("blogTag", tag);
            resp.note.setLabel("shareAlias", `tag_${tag}`);
            api.toggleNoteInParent(true, note.noteId, resp.note.noteId);
        } else {
            api.toggleNoteInParent(true, note.noteId, tagNote.noteId);
        }
    });
    note.setLabel("lastTags", tags.join("|"));
    if (unpublishedRoot.getChildNotes().some(ele => ele.noteId === note.noteId)) {
        api.toggleNoteInParent(false, note.noteId, unpublishedRoot.noteId);
    }
}


note.save();

function extractTextFromHTML(html) {
    var text = html.replace(/<[^>]*>/g, '');
    text = text.replace(/\s+/g, '');

    var extractedText = text.substring(0, 120);

    return `${extractedText}...`;
}