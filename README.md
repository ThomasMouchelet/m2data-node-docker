# Start projet 

Install dependencies

```bash
    npm install
```

Start projet in production mode

```bash
    npm start
```

Start projet in development mode

```bash
    npm run dev
```


```bash
    # docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=project -p 3306:3306 -d mysql
    docker run --name docker_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mysql -p 3306:3306 -d mysql:latest --default-authentication-plugin=mysql_native_password

```
```bash
    docker exec -it <container_id> bash
    mysql --host=localhost --user=root --password=root mysql
    show databases;
    use mysql;
    show tables;
```

```bash
CREATE TABLE post (id INT PRIMARY KEY NOT NULL, title VARCHAR(100), content VARCHAR(100));
``````

### List container
```bash
    docker container ls 
```
### connect to container
```bash
    docker exec -it <id_container> /bin/sh
```

```bash
    docker-compose up -d
``````



git config --global user.email mouchelet.thomas@gmail
git config --global user.name "thomasM"