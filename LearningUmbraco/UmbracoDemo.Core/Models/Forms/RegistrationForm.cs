using System;
using UmbracoDemo.Core.Models.Shared;

namespace UmbracoDemo.Core.Models.Forms
{
    public class RegistrationForm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Address Address { get; set; }
    }
}
