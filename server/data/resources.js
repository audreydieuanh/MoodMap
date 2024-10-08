const resourcesData = [
    {
      "id": 1,
      "title": "National Suicide Prevention Lifeline",
      "type": "Helpline",
      "description": "A free, 24/7 service that provides support, information, and resources for people in distress.",
      "link": "https://suicidepreventionlifeline.org",
      "image": "https://www.vibrant.org/wp-content/uploads/2020/02/lifeline-logo.png",
      "contact_information": {
        "phone": "1-800-273-8255",
        "text": "Text HOME to 741741"
      },
      "target_audience": "General public",
      "languages_available": ["English", "Spanish"],
      "location": "United States",
      "user_ratings": {
        "average_rating": 4.8,
        "reviews_count": 256
      },
      "tags": ["crisis", "support", "emergency"]
    },
    {
      "id": 2,
      "title": "Mindfulness App",
      "type": "App",
      "description": "An app that provides guided meditations and mindfulness practices to help manage stress.",
      "link": "https://www.mindfulnessapp.com",
      "image": "https://cdn.mindful.org/wp-content/uploads/2020/03/MindfulnessAppLogo.png",
      "contact_information": {},
      "target_audience": "General public",
      "languages_available": ["English", "French", "German"],
      "location": "Available globally",
      "user_ratings": {
        "average_rating": 4.5,
        "reviews_count": 1200
      },
      "tags": ["mindfulness", "meditation", "stress relief"]
    },
    {
      "id": 3,
      "title": "BetterHelp",
      "type": "Online Therapy",
      "description": "An online platform that connects users with licensed therapists for virtual counseling.",
      "link": "https://www.betterhelp.com",
      "image": "https://cdn.betterhelp.com/static/Brand/betterhelp_logo-green.svg",
      "contact_information": {},
      "target_audience": "Individuals seeking therapy",
      "languages_available": ["English"],
      "location": "Available in the U.S. and Canada",
      "user_ratings": {
        "average_rating": 4.7,
        "reviews_count": 5000
      },
      "tags": ["therapy", "online counseling", "mental health"]
    },
    {
      "id": 4,
      "title": "The Anxiety and Depression Association of America",
      "type": "Website",
      "description": "Provides resources, education, and support for individuals dealing with anxiety and depression.",
      "link": "https://adaa.org",
      "image": "https://adaa.org/sites/default/files/adaa-logo.png",
      "contact_information": {},
      "target_audience": "General public",
      "languages_available": ["English"],
      "location": "United States",
      "user_ratings": {
        "average_rating": 4.6,
        "reviews_count": 300
      },
      "tags": ["anxiety", "depression", "education"]
    },
    {
      "id": 5,
      "title": "Headspace",
      "type": "App",
      "description": "A meditation and mindfulness app offering guided sessions for stress relief and improved focus.",
      "link": "https://www.headspace.com",
      "image": "https://d1a2y8pfnfh44t.cloudfront.net/4c446c91-3392-4eac-b029-6a31c942caa7.jpg",
      "contact_information": {},
      "target_audience": "General public",
      "languages_available": ["English", "Spanish", "German"],
      "location": "Available globally",
      "user_ratings": {
        "average_rating": 4.4,
        "reviews_count": 8500
      },
      "tags": ["meditation", "mindfulness", "stress relief"]
    },
    {
      "id": 6,
      "title": "Crisis Text Line",
      "type": "Text Line",
      "description": "A free, 24/7 text line for anyone in crisis, providing support via text messages.",
      "link": "https://www.crisistextline.org",
      "image": "https://www.crisistextline.org/wp-content/uploads/2019/09/ctl-logo.jpg",
      "contact_information": {
        "text": "Text HOME to 741741"
      },
      "target_audience": "General public",
      "languages_available": ["English"],
      "location": "United States",
      "user_ratings": {
        "average_rating": 4.9,
        "reviews_count": 1500
      },
      "tags": ["crisis", "support", "text"]
    },
    {
      "id": 7,
      "title": "NAMI (National Alliance on Mental Illness)",
      "type": "Organization",
      "description": "A grassroots organization providing education, support, and advocacy for individuals affected by mental illness.",
      "link": "https://www.nami.org",
      "image": "https://www.nami.org/NAMI/media/NAMI-Media/Logos/NAMI_horizontal_Logo_Color.jpg",
      "contact_information": {
        "phone": "1-800-950-NAMI"
      },
      "target_audience": "Individuals with mental illness and their families",
      "languages_available": ["English", "Spanish"],
      "location": "United States",
      "user_ratings": {
        "average_rating": 4.8,
        "reviews_count": 400
      },
      "tags": ["advocacy", "support", "education"]
    },
    {
      "id": 8,
      "title": "Therapy Chat",
      "type": "Online Therapy",
      "description": "An online platform connecting users with licensed therapists for video and text therapy.",
      "link": "https://www.therapychat.com",
      "image": "https://www.therapychat.com/images/tc-logo.svg",
      "contact_information": {},
      "target_audience": "Individuals seeking therapy",
      "languages_available": ["English"],
      "location": "Available globally",
      "user_ratings": {
        "average_rating": 4.5,
        "reviews_count": 700
      },
      "tags": ["therapy", "online counseling", "mental health"]
    },
    {
      "id": 9,
      "title": "Mental Health America",
      "type": "Website",
      "description": "A community-based organization dedicated to addressing the needs of those living with mental illness.",
      "link": "https://www.mhanational.org",
      "image": "https://www.mhanational.org/sites/default/files/mha_logo_0.png",
      "contact_information": {},
      "target_audience": "General public",
      "languages_available": ["English"],
      "location": "United States",
      "user_ratings": {
        "average_rating": 4.6,
        "reviews_count": 350
      },
      "tags": ["education", "support", "resources"]
    },
    {
      "id": 10,
      "title": "You Are Not Alone",
      "type": "Support Group",
      "description": "A peer-led support group for individuals facing mental health challenges, providing a safe space to share experiences.",
      "link": "https://www.youarenotalone.org",
      "image": "https://www.youarenotalone.org/images/yal-logo.png",
      "contact_information": {},
      "target_audience": "Individuals with mental health challenges",
      "languages_available": ["English"],
      "location": "Available online",
      "user_ratings": {
        "average_rating": 4.7,
        "reviews_count": 200
      },
      "tags": ["support group", "peer support", "community"]
    }
  ]
  

  export default resourcesData;