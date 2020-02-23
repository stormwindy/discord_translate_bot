from gtts import gTTS
import os,sys

myText = ''
for i in range(2, len(sys.argv)):
    myText += sys.argv[i]
# myText = str(sys.argv[1])
language = sys.argv[1]
output = gTTS(text=myText, lang = language, slow=False)
output.save("output.mp3")
os.system("start output.mp3")