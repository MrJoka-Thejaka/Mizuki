/*
# Copyright (C) 2020 MuhammedKpln.
#
# 👸 Mizuki 1.0 beta version is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
#👸 Mizuki 1.0 beta version is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
*/

function successfullMessage(msg) {
    return "✅ *Mizuki*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Mizuki*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Mizuki*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
