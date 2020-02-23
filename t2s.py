from gtts import gTTS
import os,sys

myText = ''
for i in range(1, len(sys.argv)):
    myText += sys.argv[i]
# myText = str(sys.argv[1])
language = 'tr'
output = gTTS(text=myText, lang = language, slow=False)
output.save("output.mp3")
os.system("start output.mp3")