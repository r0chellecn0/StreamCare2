using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Data;
using WebApplication3.Dtos;

namespace WebApplication3.Controllers
{
    //[Authorize]
    //onc i figure out how to get it to work
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IStreamRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IStreamRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
         
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var userToReturn = _mapper.Map<IEnumerable<UserForDetailedDto>>(users);
            
            return Ok(userToReturn);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
    }
}