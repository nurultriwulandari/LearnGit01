--untuk membuat tabel
CREATE TABLE `users` (
  `id_user` varchar(20) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `address` varchar(20) NOT NULL,
  PRIMARY KEY (`id_user`)
) 

--inserts new data into a database
insert into users values (1, "nurul", "nurul61@gmail.com", "0213456", "perempuan", "curug");

select id_user, nama, email, phone, gender, address from users;
