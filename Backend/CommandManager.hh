#ifndef COMMAND_HH
#define COMMAND_HH
#include "lib.hh"
#include "Field.hh"

std::string exec_command(const std::string& cmd);
std::string handle_command(const std::string& cmd);
std::string get_welcome_message();

#endif