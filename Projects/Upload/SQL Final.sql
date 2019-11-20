DROP TABLE borrower CASCADE CONSTRAINTS;
CREATE TABLE borrower (
	name varchar2(50) not null,
	address varchar2(50),
	major varchar2(50),
	department varchar2(40),
	job varchar2(30),
	BID char(9),
	BType varchar(8) not null,
	primary key (BID)
);
   
DROP TABLE publisher CASCADE CONSTRAINTS;
CREATE TABLE publisher (
	name varchar2(50),
	URL varchar2(70),
	primary key (name)
);

DROP TABLE library_item CASCADE CONSTRAINTS;
CREATE TABLE library_item (
	title varchar2(30),
	ID char(10),
	pubname varchar2(50),
	BID char(9),
    check_out_date date,
	return_date date,
	primary key (ID),
	foreign key (BID) references borrower (BID),
	foreign key (pubname) references publisher (name)
);

DROP TABLE reserved_by CASCADE CONSTRAINTS;
CREATE TABLE reserved_by (
	BID char(9),
	ID char(10),   
	ordernumber integer,
	primary key (BID, ID),
    foreign key (BID) references borrower (BID),
    foreign key (ID) references library_item (ID)
);

DROP TABLE conference_proceeding CASCADE CONSTRAINTS;
CREATE TABLE conference_proceeding (
	CDate date,
	location varchar2(50),
	conference_ID char(10),
	primary key (conference_ID),
	foreign key (conference_ID) references library_item (ID)
);

DROP TABLE editor CASCADE CONSTRAINTS;
CREATE TABLE editor (
	EName varchar2(50),
	ID char(10),
	primary key (EName, ID),
	foreign key (ID) references conference_proceeding (conference_ID)
);

DROP TABLE book CASCADE CONSTRAINTS;
CREATE TABLE book (
	book_ID char(10),
    primary key (book_ID),
	foreign key (book_ID) references library_item (ID)
);

DROP TABLE author CASCADE CONSTRAINTS;
CREATE TABLE author (
	AName varchar2(40),
	ID char(10),
	primary key (AName, ID),
	foreign key (ID) references book (book_ID)
);

DROP TABLE journal CASCADE CONSTRAINTS;
CREATE TABLE journal (
	volume varchar2(40),
	journal_ID char(10),
	primary key (journal_ID),
	foreign key (journal_ID) references library_item (ID)
);

DROP TABLE magazine CASCADE CONSTRAINTS;
CREATE TABLE magazine (
	type varchar2(30),
	publication_date date,
	magazine_ID char(10),
	primary key (magazine_ID),
	foreign key (magazine_ID) references library_item (ID)
);

INSERT INTO borrower VALUES 
    ('Justin Trust', '101 City Drive, Normal IL', 'Business Adminstration', null, null, '12345678', 'Student');
INSERT INTO borrower VALUES 
    ('Fuxia Cheng', '482 Bumpin Grove, New York NY', null, 'Mathematics', null, '99985678', 'Faculty');
INSERT INTO borrower VALUES 
    ('Jeremiah Stone', '300 Fiddy Circle, Bloomington IL', 'Information Technology', null, null, '39245678', 'Student');
INSERT INTO borrower VALUES 
    ('William Merandas', '13 Fire Street, Las Vegas NV', null, null, 'Janitor', '22245678', 'Other');   
INSERT INTO borrower VALUES 
    ('Willus Millus', '14 Curtus Lane, Normal IL', null, 'Physics', null, '22245671', 'Faculty');  

INSERT INTO publisher VALUES
    ('Maxwell Publishing', 'http://mpub.org');
INSERT INTO publisher VALUES
    ('Sunrise International', 'http://sri.com');
INSERT INTO publisher VALUES
    ('Paper Arts', 'http://paperarts.org');
INSERT INTO publisher VALUES
    ('Carmonik Corporation', 'http://carmonikcorp.com');
INSERT INTO publisher VALUES
    ('New World Order Society', 'http://novos.order.seclorum.net');


INSERT INTO library_item VALUES
    ('An Unfortunate Event', '1000000001', 'New World Order Society', null, null, null);
INSERT INTO conference_proceeding VALUES
    (TO_DATE('2001-09-11','YYYY-MM-DD'), 'New York NY', '1000000001');
INSERT INTO editor VALUES
    ('George Bush', '1000000001');
INSERT INTO library_item VALUES
    ('Some Court Hearing', '1000000002', 'New World Order Society', null, null, null);
INSERT INTO conference_proceeding VALUES
    (TO_DATE('2011-08-12','YYYY-MM-DD'), 'New York NY', '1000000002');
INSERT INTO editor VALUES
    ('Al Yanktin', '1000000002');
INSERT INTO library_item VALUES
    ('Court Hearing for Casey', '1000000003', 'New World Order Society', null, null, null);
INSERT INTO conference_proceeding VALUES
    (TO_DATE('2016-11-14','YYYY-MM-DD'), 'New York NY', '1000000003');
INSERT INTO editor VALUES
    ('Al Yanktin', '1000000003');
INSERT INTO library_item VALUES
    ('CocaCola Company Presentation', '1000000004', 'Carmonik Corporation', '12345678', TO_DATE('2019-06-12','YYYY-MM-DD'), TO_DATE('2019-09-12','YYYY-MM-DD'));
INSERT INTO conference_proceeding VALUES
    (TO_DATE('1992-02-22','YYYY-MM-DD'), 'Coke Land, CA', '1000000004');
INSERT INTO editor VALUES
    ('William Koch', '1000000004');
INSERT INTO library_item VALUES
    ('Pepsi Presentation', '1000000005', 'Carmonik Corporation', null, null, null);
INSERT INTO conference_proceeding VALUES
    (TO_DATE('1992-02-23','YYYY-MM-DD'), 'Pepsi-Land', '1000000005');
INSERT INTO editor VALUES
    ('Pepsi Man', '1000000005');

INSERT INTO library_item VALUES
    ('Bible', '2000000001', 'Paper Arts', '22245671', TO_DATE('2019-04-11','YYYY-MM-DD'), TO_DATE('2019-07-11','YYYY-MM-DD'));
INSERT INTO book VALUES
    ('2000000001');
INSERT INTO Author VALUES
    ('God', '2000000001');
INSERT INTO library_item VALUES
    ('The Book of Enoch', '2000000002', 'Paper Arts', null, null, null);
INSERT INTO book VALUES
    ('2000000002');
INSERT INTO Author VALUES
    ('Enoch', '2000000002');
INSERT INTO library_item VALUES
    ('Fahrenheit 451', '2000000003', 'Paper Arts', null, null, null);
INSERT INTO book VALUES
    ('2000000003');
INSERT INTO Author VALUES
    ('Ray Bradbury', '2000000003');
INSERT INTO library_item VALUES
    ('1984', '2000000004', 'Paper Arts', '12345678', TO_DATE('2019-04-19','YYYY-MM-DD'), TO_DATE('2019-04-19','YYYY-MM-DD'));
INSERT INTO book VALUES
    ('2000000004');
INSERT INTO Author VALUES
    ('George Orwell', '2000000004');
INSERT INTO library_item VALUES
    ('The Atonement', '2000000005', 'Maxwell Publishing', null, null, null);
INSERT INTO book VALUES
    ('2000000005');
INSERT INTO Author VALUES
    ('Ian McEwan', '2000000004');

INSERT INTO library_item VALUES
    ('The Diary of Anne Frank', '3000000001', 'Maxwell Publishing', null, null, null);
INSERT INTO journal VALUES
    ('1', '3000000001');
INSERT INTO library_item VALUES
    ('Journal of My Friend', '3000000002', 'Maxwell Publishing', null, null, null);
INSERT INTO journal VALUES
    ('3', '3000000002');
INSERT INTO library_item VALUES
    ('My Girlfriends Journal', '3000000003', 'Carmonik Corporation', null, null, null);
INSERT INTO journal VALUES
    ('5', '3000000003');
INSERT INTO library_item VALUES
    ('The Story of Abe Lincoln', '3000000004', 'New World Order Society', null, null, null);
INSERT INTO journal VALUES
    ('2', '3000000004');
INSERT INTO library_item VALUES
    ('Encyclopedia Dramatica', '3000000005', 'Carmonik Corporation', null, null, null);
INSERT INTO journal VALUES
    ('2', '3000000005');

INSERT INTO library_item VALUES
    ('Is the Order a Rabbit?', '5000000001','New World Order Society',null,null,null);
INSERT INTO magazine VALUES
    ('Shopping', TO_DATE('1992-02-23','YYYY-MM-DD'), '5000000001');
INSERT INTO library_item VALUES
    ('Beat 17', '5000000002','Sunrise International',null,null,null);
INSERT INTO magazine VALUES
    ('Teen News', TO_DATE('1996-11-03','YYYY-MM-DD'), '5000000002');
INSERT INTO library_item VALUES
    ('Fortune 500', '5000000003','New World Order Society',null,null,null);
INSERT INTO magazine VALUES
    ('Business', TO_DATE('1983-01-07','YYYY-MM-DD'), '5000000003');
INSERT INTO library_item VALUES
    ('Cosmopolitan', '5000000004','Sunrise International',null,null,null);
INSERT INTO magazine VALUES
    ('Teen News', TO_DATE('2008-02-25','YYYY-MM-DD'), '5000000004');
INSERT INTO library_item VALUES
    ('Brave', '5000000005','Sunrise International',null,null,null);
INSERT INTO magazine VALUES
    ('Shopping', TO_DATE('2011-11-13','YYYY-MM-DD'), '5000000005');

INSERT INTO reserved_by VALUES
    ('12345678', '1000000004', 1);
INSERT INTO reserved_by VALUES
    ('22245671', '2000000004', 1);
INSERT INTO reserved_by VALUES
    ('22245678', '2000000001', 2);
INSERT INTO reserved_by VALUES
    ('99985678', '2000000001', 3);
INSERT INTO reserved_by VALUES
    ('39245678', '2000000001', 4);

--All select Queries
select * from borrower;
select * from library_item;
select * from reserved_by;
select * from book;
select * from magazine;
select * from publisher;
select * from editor;
select * from conference_proceeding;
select * from author;
select * from journal;

--Query a)
select id, name, borrower.bid
from borrower inner join library_item on library_item.bid = borrower.bid inner join book on library_item.id = book.book_id
where borrower.bid = '12345678';

select id, name, borrower.bid
from borrower inner join library_item on library_item.bid = borrower.bid inner join book on library_item.id = book.book_id
where borrower.name = 'Willus Millus';

--Query b)
select name, title, check_out_date
from borrower natural join library_item
where check_out_date > TO_DATE('2018-01-01','YYYY-MM-DD') and check_out_date < TO_DATE('2020-01-01','YYYY-MM-DD');

--Query c)
select pubname, count(*)
from library_item
group by pubname
order by pubname;

--Query d)
select ename, pubname, title
from editor natural join library_item
where pubname = 'New World Order Society';

--Query e)
select borrower.name, borrower.bid 
from borrower inner join reserved_by on reserved_by.bid = borrower.bid inner join book on reserved_by.id = book.book_id
order by name;