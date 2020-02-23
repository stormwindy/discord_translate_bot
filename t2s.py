from gtts import gTTS
import os

myText = input()
language = 'tr'
output = gTTS(text=myText, lang = language, slow=False)
output.save("output.mp3")
os.system("start output.mp3")
