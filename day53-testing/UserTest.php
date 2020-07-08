<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;
use User;

class UserTest extends TestCase
{
    public function testUserObjectCanBeCreated()
    {
        $user = new User;

        $this->assertInstanceOf('User', $user);
    }

    public function testUserObjectCanBeCreatedWithEmailAddress()
    {
        $user = new User('john.doe@email.com');

        // we assert that the result of previous operation(s)
        // equals some value
        $this->assertEquals(
            'john.doe@email.com',
            $user->email
        );
    }

    public function testInvalidEmailAddressCausesException()
    {
        $this->expectException('InvalidArgumentException');
        // expect that the following code will throw InvalidArgumentException

        $user = new User('asdfghjk');
    }

    public function testUserCanBeUsedAsAString()
    {
        $user = new User('john.doe@email.com');

        // convert the User object to string
        $string = (string)$user;

        $this->assertEquals(
            $string,
            'john.doe@email.com'
        );
    }
}