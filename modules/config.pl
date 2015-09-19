#!/usr/bin/perl
package Config;

use strict;

my %configitems = ();

$configitems{ 'databaseserver' }   = "localhost:3306";
$configitems{ 'databaseusername' } = "root";
$configitems{ 'databasepassword' } = "root";
$configitems{ 'databaseschema' }   = "cooltech";

sub getConfig {
		my $key = $_[0];
		return $configitems{ $key };
} 

1;
