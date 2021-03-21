#from date_intrare import InputData

f = open("data_file.txt", "r")
nr_line = 0
line = f.readline()
parameters = line.count(' ') + 1
data_entry = [[0 for x in range(10)] for y in range(20)]
while len(line) != 0:
    index = 0
    #print(line)
    for camp in line.split(" "):
        data_entry[nr_line][index] = camp
        index += 1
    line = f.readline()
    print(data_entry[nr_line])
    nr_line += 1
    #print(line)

f.close()
