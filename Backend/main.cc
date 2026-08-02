#include "lib.hh"
#include "CommandManager.hh"

typedef websocketpp::server<websocketpp::config::asio> server;
using websocketpp::connection_hdl;

int main() {
    server srv;

    try {
        srv.set_access_channels(websocketpp::log::alevel::all);
        srv.clear_access_channels(websocketpp::log::alevel::frame_payload);

        srv.init_asio();
        srv.set_reuse_addr(true);

        srv.set_open_handler([&srv](connection_hdl hdl) {
            std::cout << "New client connected!" << std::endl;
            std::string welcome = get_welcome_message();
            srv.send(hdl, welcome, websocketpp::frame::opcode::text);
        });

        srv.set_message_handler([&srv](connection_hdl hdl, server::message_ptr msg) {
            std::string command = msg->get_payload();
            std::cout << "Received: " << command << std::endl;
            std::string response = handle_command(command);
            srv.send(hdl, response, msg->get_opcode());
        });

        srv.listen(3000);
        srv.start_accept();
        std::cout << "WebSocket server started on port 3000" << std::endl;
        srv.run();
    } catch (const std::exception& e) {
        std::cerr << "Exception: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}