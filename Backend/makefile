Gnu++ = g++
STD = -std=c++17
File = main.cc Field.cc CommandManager.cc
Output = -o server
Lib = -lboost_system -lpthread

all: g++ run

g++: $(File)
	$(Gnu++) $(STD) $(File) $(Output) $(Lib)

run:
	./server