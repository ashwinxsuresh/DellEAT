// creating an array of types of disabilities
let distype = [
    {
      title: "What best describes your disability?",
      options: [
        "Auditory",
        "Visual",
        "Cognitive",
        "Mobility"
    ]
  },
];

// creating an array of disabilities
let disability = [
    {
        distype: "Auditory",
        options: [
            "Hearing Impairment",
            "Deafness",
            "Other"
        ],
        severity: [
            "Not Severe",
            "Severe",
            "Very Severe"
        ]
    },
    {
        distype: "Visual",
        options: [
            "Blindness",
            "Visual Impairment",
            "Other"
        ],
        severity: [
            "Not Severe",
            "Severe",
            "Very Severe"
        ]
    },
    {
        distype: "Cognitive",
        options: [
            "ADHD",
            "PTSD",
            "Depression",
            "Autism",
            "Other"
        ],
        severity: [
            "Not Severe",
            "Severe",
            "Very Severe"
        ]
    },
    {
        distype: "Mobility",
        options: [
            "Back Impairment",
            "Paralysis",
            "Other"
        ],
        severity: [
            "Not Severe",
            "Severe",
            "Very Severe"
        ]
    },
];

// creating an array of solutions
let solutions = [
    {
        disability: "Hearing Impairment",
        solutions: [
            "Naturally Speaking",
            "Closed Captions in Zoom",
            "Closed Captions in Teams"
        ],
        description: [
            "Dictation software that converts speech to text leveraging advanced Deep Learning technology",
            "Zoom can detect what's said in a meeting and present real-time captions",
            "Teams can detect what's said in a meeting and present real-time captions"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://support.zoom.us/hc/en-us/articles/207279736-Managing-and-viewing-closed-captioning#h_4cb4e874-d574-4e40-ab12-7d8fae1f71cc",
            "https://support.microsoft.com/en-us/office/use-live-captions-in-a-teams-meeting-4be2d304-f675-4b57-8347-cbd000a21260"
        ],
    },
    {
        disability: "Deafness",
        solutions: [
            "Naturally Speaking",
            "Closed Captions in Zoom",
            "Closed Captions in Teams"
        ],
        description: [
            "Dictation software that converts speech to text leveraging advanced Deep Learning technology",
            "Zoom can detect what's said in a meeting and present real-time captions",
            "Teams can detect what's said in a meeting and present real-time captions"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://support.zoom.us/hc/en-us/articles/207279736-Managing-and-viewing-closed-captioning#h_4cb4e874-d574-4e40-ab12-7d8fae1f71cc",
            "https://support.microsoft.com/en-us/office/use-live-captions-in-a-teams-meeting-4be2d304-f675-4b57-8347-cbd000a21260"
        ],
    },
    {
        disability: "Blindness",
        solutions: [
            "JAWS (Jobs Access with Speech)",
            "Braillenote Touch 32 Plus",
            "Focus 40 Blue"
        ],
        description: [
            "Screen reader that provides speech and braille output for popular computer applications",
            "Braillenote touch that uses braille literacy combined with a traditional tablet",
            "The Focus 40 Blue is a durable, lightweight Braille Display that provides Braille output from your computer"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10"
        ],
    },
    {
        disability: "Visual Impairment",
        solutions: [
            "Windows Narrator",
            "Read Aloud",
            "Focus 40 Blue"
        ],
        description: [
            "Screen reader and text-to-speech feature in Windows 10",
            "Text-to-speech application that can read aloud web pages and documents",
            "The Focus 40 Blue is a durable, lightweight Braille Display that provides Braille output from your computer"
        ],
        links: [
            "https://support.microsoft.com/en-us/windows/chapter-1-introducing-narrator-7fe8fd72-541f-4536-7658-bfc37ddaf9c6",
            "https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10"
        ],
    },
    {
        disability: "ADHD",
        solutions: [
            "Windows Ease of Access",
            "Natural Reader",
            "Closed Captions"
        ],
        description: [
            "Center brings together functionality for accessibility and ease of use to configure your PC to suit your physical and cognitive needs",
            "Text-to-speech (TTS) program that converts written text from multiple formats into spoken words using a synthetic voice",
            "Detect what's said in a meeting and present real-time captions"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://support.zoom.us/hc/en-us/articles/207279736-Managing-and-viewing-closed-captioning#h_4cb4e874-d574-4e40-ab12-7d8fae1f71cc"
        ],
    },
    {
        disability: "Autism",
        solutions: [
            "Windows Ease of Access",
            "Natural Reader",
            "Closed Captions"
        ],
        description: [
            "Center brings together functionality for accessibility and ease of use to configure your PC to suit your physical and cognitive needs",
            "Text-to-speech (TTS) program that converts written text from multiple formats into spoken words using a synthetic voice",
            "Detect what's said in a meeting and present real-time captions"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://support.zoom.us/hc/en-us/articles/207279736-Managing-and-viewing-closed-captioning#h_4cb4e874-d574-4e40-ab12-7d8fae1f71cc"
        ],
    },
    {
        disability: "PTSD",
        solutions: [
            "Dark Mode",
            "Noise-Cancelling Headphones",
            "Voice Recorder"
        ],
        description: [
            "For those who find bright displays problematic unlock Dark mode",
            "Noise-cancelling headphones for lack of concentration",
            "Windows voice recorder application to help with memory issues"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://www.dell.com/en-us/shop/audio-technica-quietpoint-wireless-on-ear-headphones/apd/aa122350/audio",
            "https://www.microsoft.com/en-us/p/windows-voice-recorder/9wzdncrfhwkn#activetab=pivot:overviewtab"
        ],
    },
    {
        disability: "Depression",
        solutions: [
            "Windows Ease of Access",
            "Noise-Cancelling Headphones",
            "Voice Recorder"
        ],
        description: [
            "Center brings together functionality for accessibility and ease of use to configure your PC to suit your physical and cognitive needs",
            "Noise-cancelling headphones for lack of concentration",
            "Windows voice recorder application to help with memory issues"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://www.dell.com/en-us/shop/audio-technica-quietpoint-wireless-on-ear-headphones/apd/aa122350/audio",
            "https://www.microsoft.com/en-us/p/windows-voice-recorder/9wzdncrfhwkn#activetab=pivot:overviewtab"
        ],
    },
    {
        disability: "Back Impairment",
        solutions: [
            "Naturally Speaking",
            "Natural Reader",
            "Accessibility Checker"
        ],
        description: [
            "Dictation software that converts speech to text leveraging advanced Deep Learning technology",
            "Text-to-speech (TTS) program that converts written text from multiple formats into spoken words using a synthetic voice",
            "In PowerPoint, Word, Excel and PDF use Accessibility checker to find accessibility problems with a list of suggestions unlocking your content for everyone fostering inclusion"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10"
        ],
    },
    {
        disability: "Paralysis",
        solutions: [
            "Naturally Speaking",
            "Natural Reader",
            "SofType5"
        ],
        description: [
            "Dictation software that converts speech to text leveraging advanced Deep Learning technology",
            "Text-to-speech (TTS) program that converts written text from multiple formats into spoken words using a synthetic voice",
            "Software utility that replaces the functionality of a physical keyboard with a full featured, on-screen keyboard"
        ],
        links: [
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10"
        ],
    },
    {
        disability: "Other",
        solutions: [
            "Assistive Technology Space",
            "Technology Suggestion?",
            "Contact the Accessibility Team"
        ],
        description: [
            "Software and hardware that brings inclusivity to all our team members",
            "Use this form to submit suggestions of new Assistive Technology for review by our team",
            "Reach out to the accessibility team to further assist you with your needs"
        ],
        links: [
            "https://inside.dell.com/community/active/assistive-technology",
            "https://forms.office.com/Pages/ResponsePage.aspx?id=mhlclKKDgE6fjFqRvldS3SHp4vSNuFFBuaZHJ2ZazQ1UOUcyVzVTUDJNQlFJMTYzUjI3TE9HTjRUMi4u",
            "https://forms.office.com/Pages/ResponsePage.aspx?id=mhlclKKDgE6fjFqRvldS3dUI69lx3yVNsxcB_8RbvWlUNkVFNzA4UE1XNFNJWDlEUU5IREVaTUsyUyQlQCN0PWcu"
        ],
    }
];