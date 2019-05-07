from web import server 
import os


if __name__=='__main__':
    port =int(os.environ.get("PORT",9090))
    server.run(host='0.0.0.0',port=port)   