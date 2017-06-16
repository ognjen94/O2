using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace System {
	public class Region {

		private int id;
		private string name;
        [JsonIgnore]
        public List<Place> m_Place { get; set; }

        [Required]
        public Country country { get; set; }

		public Region(){

		}

		~Region(){

		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
			}
		}

		public string Name{
			get{
				return name;
			}
			set{
				name = value;
			}
		}

	}
}