function regenerate() {
    document.getElementById("card1").innerHTML = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
    document.getElementById("card2").innerHTML = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
    document.getElementById("card3").innerHTML = angryQuotes[Math.floor(Math.random() * angryQuotes.length)];
    document.getElementById("card4").innerHTML = scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)];
    document.getElementById("card5").innerHTML = guiltQuotes[Math.floor(Math.random() * guiltQuotes.length)];
    document.getElementById("card6").innerHTML = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    document.getElementById("card7").innerHTML = surpriseQuotes[Math.floor(Math.random() * surpriseQuotes.length)];
    // alert("Quotes regenerated.")
    }

const happyQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Count your age by friends, not years. Count your life by smiles, not tears. - John Lennon",
    "Be happy for this moment. This moment is your life. - Omar Khayyam",
    "Happiness is a state of mind. It's just according to the way you look at things. - Walt Disney",
    "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
    "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain"
  ];
  const sadQuotes = [
    "The walls we build around us to keep out the sadness also keep out the joy. - Jim Rohn",
    "Tears come from the heart and not from the brain. - Leonardo da Vinci",
    "The saddest thing about love is that not only the love cannot last forever, but even the heartbreak is soon forgotten. - William Faulkner",
    "The walls we build around us to keep out the sadness also keep out the joy. - Jim Rohn",
    "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep. - Taraji P. Henson"
  ];
  const angryQuotes = [
    "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured. - Mark Twain",
    "For every minute you remain angry, you give up sixty seconds of peace of mind. - Ralph Waldo Emerson",
    "Speak when you are angry and you will make the best speech you will ever regret. - Ambrose Bierce",
    "Anger, resentment, and jealousy don't change the heart of others; they only change yours. - Shannon L. Alder"
  ];
  
  const scaredQuotes = [
    "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering. - Yoda",
    "Do not be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
  ];
  
  const guiltQuotes = [
    "Guilt is cancer. Guilt will confine you, torture you, destroy you as an artist. It's a black wall. It's a thief. - Dave Grohl",
    "Guilt is just as powerful, but its influence is positive, while shame's is destructive. Shame erodes our courage and fuels disengagement. - Brené Brown"
  ];
  
  const loveQuotes = [
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
    "Love is an endless mystery, for it has nothing else to explain it. - Rabindranath Tagore"
  ];
  
  const surpriseQuotes = [
    "The only thing that should surprise us is that there are still some things that can surprise us. - François de La Rochefoucauld",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs"
  ];

document.getElementById("card1").innerHTML = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
document.getElementById("card2").innerHTML = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
document.getElementById("card3").innerHTML = angryQuotes[Math.floor(Math.random() * angryQuotes.length)];
document.getElementById("card4").innerHTML = scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)];
document.getElementById("card5").innerHTML = guiltQuotes[Math.floor(Math.random() * guiltQuotes.length)];
document.getElementById("card6").innerHTML = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
document.getElementById("card7").innerHTML = surpriseQuotes[Math.floor(Math.random() * surpriseQuotes.length)];

