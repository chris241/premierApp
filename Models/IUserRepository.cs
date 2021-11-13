using System;
using System.Collections.Generic;

namespace premierApp.Models
{
    public interface IUserRepository
    {
        IEnumerable<UserModel> GetAll();
        
        UserModel Add(UserModel user);
    }
}