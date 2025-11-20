import Note from "../../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.console.error("error get the notes", error);

    res.status(500).json({ message: "internal server error" });
  }
  //res.status(201).json({ message: "note created successfully!" });
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "note not found" });
    res.json(note);
  } catch (error) {
    console.console.error("error get the notes", error);

    res.status(500).json({ message: "internal server error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "note created successfully!" });
  } catch (error) {
    console.console.error("error creating the note", error);

    res.status(500).json({ message: "internal server error" });
  }
  // res.status(201).json({ message: "note created successfully!" });
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updateNotes = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateNotes)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updateNotes);
  } catch (error) {
    console.error("error updating the note", error);

    res.status(500).json({ message: "internal server error" });
  }
  // res.status(200).json({ message: "notes updated successfully!" });
}

export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json({ message: "note deleted successfully" });
  } catch (error) {
    console.error("error deleting the note", error);

    res.status(500).json({ message: "internal server error" });
  }
  // res.status(200).json({ message: "note deleted successfully!" });
}
