package getData;

use strict;
use DBI;

require "config.pl";

my $database            = Config::getConfig("databaseschema");
my $data_source         = Config::getConfig("databaseserver");

my $db_username         = Config::getConfig("databaseusername");
my $db_password         = Config::getConfig("databasepassword");

&testsql();

sub testsql
{
		print "database $database data_source $data_source db_username $db_username db_password $db_password \n";
        my $dbh    = DBI->connect( "DBI:mysql:database=$database;host=$data_source", $db_username, $db_password, { RaiseError => 1 } );
		if ( $dbh )
		{
			print "DB Connected $dbh \n";
		}
		else
		{
			print "DB failed $dbh \n ";
		}
		my $sql = qq{ select * from USERROLES };
        my $sth = $dbh->prepare( $sql );
        $sth->execute();
        while ( my $test = $sth->fetchrow_hashref() ) {
				print " $test->{'id'}, $test->{'role'} \n";
        }

        $sth->finish();
        $dbh->disconnect();
}
1;
