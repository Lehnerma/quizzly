const QUESTIONS = [
    {
      "question": "Was bedeutet HTML?",
      "answer_1": "Hyper Text Markup Language",
      "answer_2": "High Tech Modern Language",
      "answer_3": "Home Tool Markup Language",
      "answer_4": "Hyperlinks and Text Markup Language",
      "right_answer": 1
    },
    {
      "question": "Welches HTML-Element wird verwendet, um eine Überschrift der höchsten Ebene zu erstellen?",
      "answer_1": "<heading>",
      "answer_2": "<h6>",
      "answer_3": "<h1>",
      "answer_4": "<head>",
      "right_answer": 3
    },
    {
      "question": "Mit welchem Tag erstellt man einen Hyperlink?",
      "answer_1": "<link>",
      "answer_2": "<a>",
      "answer_3": "<href>",
      "answer_4": "<hyperlink>",
      "right_answer": 2
    },
    {
      "question": "Welches Attribut wird verwendet, um alternative Texte für Bilder anzugeben?",
      "answer_1": "title",
      "answer_2": "src",
      "answer_3": "alt",
      "answer_4": "description",
      "right_answer": 3
    },
    {
      "question": "Wie erstellt man eine ungeordnete Liste in HTML?",
      "answer_1": "<ol>",
      "answer_2": "<list>",
      "answer_3": "<ul>",
      "answer_4": "<dl>",
      "right_answer": 3
    },
    {
      "question": "Welches HTML-Element wird für den größten Textbereich verwendet?",
      "answer_1": "<input>",
      "answer_2": "<textarea>",
      "answer_3": "<text>",
      "answer_4": "<bigtext>",
      "right_answer": 2
    },
    {
      "question": "Mit welchem Tag wird ein Zeilenumbruch eingefügt?",
      "answer_1": "<break>",
      "answer_2": "<lb>",
      "answer_3": "<newline>",
      "answer_4": "<br>",
      "right_answer": 4
    },
    {
      "question": "Welches Attribut definiert die Inline-Styles eines Elements?",
      "answer_1": "class",
      "answer_2": "style",
      "answer_3": "css",
      "answer_4": "styles",
      "right_answer": 2
    },
    {
      "question": "Wie bindet man ein externes CSS-Stylesheet in HTML ein?",
      "answer_1": "<style src='style.css'>",
      "answer_2": "<css>style.css</css>",
      "answer_3": "<link rel='stylesheet' href='style.css'>",
      "answer_4": "<stylesheet>style.css</stylesheet>",
      "right_answer": 3
    },
    {
      "question": "Welches HTML5-Element wird für eigenständige Inhalte verwendet?",
      "answer_1": "<section>",
      "answer_2": "<article>",
      "answer_3": "<div>",
      "answer_4": "<content>",
      "right_answer": 2
    },
    {
      "question": "Was ist der Unterschied zwischen <div> und <span>?",
      "answer_1": "Kein Unterschied",
      "answer_2": "<div> ist inline, <span> ist block",
      "answer_3": "<div> ist block, <span> ist inline",
      "answer_4": "<span> kann nur Text enthalten",
      "right_answer": 3
    },
    {
      "question": "Welches Attribut macht ein Eingabefeld zu einem Pflichtfeld?",
      "answer_1": "validate",
      "answer_2": "required",
      "answer_3": "mandatory",
      "answer_4": "important",
      "right_answer": 2
    },
    {
      "question": "Welches HTML5-Element wird für Navigation verwendet?",
      "answer_1": "<navigation>",
      "answer_2": "<menu>",
      "answer_3": "<nav>",
      "answer_4": "<navbar>",
      "right_answer": 3
    },
    {
      "question": "Was ist der korrekte HTML-Code für eine Definition List?",
      "answer_1": "<dl><dt>Term</dt><dd>Definition</dd></dl>",
      "answer_2": "<list><term>Term</term><def>Definition</def></list>",
      "answer_3": "<deflist><term>Term</term><definition>Definition</definition></deflist>",
      "answer_4": "<dl><term>Term</term><definition>Definition</definition></dl>",
      "right_answer": 1
    },
    {
      "question": "Welches Attribut gibt den Zeichensatz eines HTML-Dokuments an?",
      "answer_1": "<meta encoding='UTF-8'>",
      "answer_2": "<meta charset='UTF-8'>",
      "answer_3": "<meta character-set='UTF-8'>",
      "answer_4": "<charset>UTF-8</charset>",
      "right_answer": 2
    },
    {
      "question": "Was ist der Zweck des <canvas> Elements?",
      "answer_1": "Zum Erstellen von Tabellen",
      "answer_2": "Zum Einbetten von Videos",
      "answer_3": "Zum Zeichnen von Grafiken via JavaScript",
      "answer_4": "Zum Erstellen von Formularen",
      "right_answer": 3
    },
    {
      "question": "Welches Attribut wird verwendet, um Daten in benutzerdefinierten Attributen zu speichern?",
      "answer_1": "custom-*",
      "answer_2": "data-*",
      "answer_3": "meta-*",
      "answer_4": "attr-*",
      "right_answer": 2
    },
    {
      "question": "Was ist der Unterschied zwischen <script async> und <script defer>?",
      "answer_1": "Kein Unterschied",
      "answer_2": "async lädt parallel und führt sofort aus, defer lädt parallel aber führt nach DOM-Parsing aus",
      "answer_3": "defer lädt parallel und führt sofort aus, async lädt parallel aber führt nach DOM-Parsing aus",
      "answer_4": "async ist nur für externe Scripts, defer für inline",
      "right_answer": 2
    },
    {
      "question": "Welches HTML5-Element bietet native Validierung für E-Mail-Adressen?",
      "answer_1": "<input type='text' validate='email'>",
      "answer_2": "<email>",
      "answer_3": "<input type='email'>",
      "answer_4": "<input type='text' pattern='email'>",
      "right_answer": 3
    },
    {
      "question": "Was bewirkt das 'contenteditable' Attribut?",
      "answer_1": "Es macht ein Element durch den Benutzer editierbar",
      "answer_2": "Es definiert den Inhaltstyp eines Elements",
      "answer_3": "Es erlaubt das Kopieren von Inhalten",
      "answer_4": "Es aktiviert die Rechtschreibprüfung",
      "right_answer": 1
    }
  ]