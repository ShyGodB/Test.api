create table user (
	id int auto_increment primary key,

	nickName varchar(32) not null default '',
	realName varchar(32) not null default '',
	phone varchar(16) not null default '',
	password varchar(64) not null default '',
	avatar varchar(256) not null default '',
	gender varchar(8) not null default 'man',
	regSource varchar(32) not null default '',

	isOff boolean not null default false,
	isDel boolean not null default false,
	createTime DATETIME not null default current_timestamp,
	updateTime DATETIME not null default current_timestamp
) ENGINE=InnoDB auto_increment=10000 DEFAULT CHARSET=utf8;

create index user_nickName on user (nickName);
create index user_realName on user (realName);
create index user_phone on user (phone);