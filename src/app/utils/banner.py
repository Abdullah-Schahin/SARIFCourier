from colorama import Fore, Style, init

init(autoreset=True)

def print_banner():
    banner = """
███████╗ █████╗ ██████╗ ██╗███████╗██████╗ ███╗   ███╗██████╗ 
██╔════╝██╔══██╗██╔══██╗██║██╔════╝╚════██╗████╗ ████║██╔══██╗
███████╗███████║██████╔╝██║█████╗   █████╔╝██╔████╔██║██║  ██║
╚════██║██╔══██║██╔══██╗██║██╔══╝  ██╔═══╝ ██║╚██╔╝██║██║  ██║
███████║██║  ██║██║  ██║██║██║     ███████╗██║ ╚═╝ ██║██████╔╝
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚══════╝╚═╝     ╚═╝╚═════╝                                                    
    """
    print(Fore.GREEN + banner + "\n" + Fore.CYAN + "SARIF2MD 🔄 - Light CLI tool to convert SARIF reports to clean Markdown (by Abdullah Shahen)" + "\n")

print_banner()