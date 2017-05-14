/*

  Rikaikun
  Copyright (C) 2010 Erek Speed
  http://code.google.com/p/rikaikun/

  ---

  Originally based on Rikaichan 1.07
  by Jonathan Zarate
  http://www.polarcloud.com/

  ---

  Originally based on RikaiXUL 0.4 by Todd Rudick
  http://www.rikai.com/
  http://rikaixul.mozdev.org/

  ---

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

  ---

  Please do not change or remove any of the copyrights or links to web pages
  when modifying any of the files. - Jon

*/
var Deinflector = function() {
  this.reasons = [];
  this.rules = [];

  var buffer = [
    "Deinflect Rules 20081220-0509 | by Jonathan Zarate | http://www.polarcloud.com",
    "polite past negative",
    "polite negative",
    "polite volitional",
    "-chau",
    "-sugiru",
    "-nasai",
    "polite past",
    "-tara",
    "-tari",
    "causative",
    "potential or passive",
    "-sou",
    "-tai",
    "polite",
    "past",
    "negative",
    "passive",
    "-ba",
    "volitional",
    "potential",
    "passive or causative",
    "-te",
    "-zu",
    "imperative",
    "masu stem",
    "adv",
    "noun",
    "imperative negative",
    "くありませんでした	い	1152	0",
    "いませんでした	う	640	0",
    "きませんでした	く	640	0",
    "きませんでした	くる	2176	0",
    "ぎませんでした	ぐ	640	0",
    "しませんでした	す	640	0",
    "しませんでした	する	4224	0",
    "ちませんでした	つ	640	0",
    "にませんでした	ぬ	640	0",
    "びませんでした	ぶ	640	0",
    "みませんでした	む	640	0",
    "りませんでした	る	640	0",
    "くありません	い	1152	1",
    "ませんでした	る	2432	0",
    "いましょう	う	640	2",
    "きましょう	く	640	2",
    "きましょう	くる	2176	2",
    "ぎましょう	ぐ	640	2",
    "しましょう	す	640	2",
    "しましょう	する	4224	2",
    "ちましょう	つ	640	2",
    "にましょう	ぬ	640	2",
    "びましょう	ぶ	640	2",
    "みましょう	む	640	2",
    "りましょう	る	640	2",
    "いじゃう	ぐ	514	3",
    "いすぎる	う	513	4",
    "いちゃう	く	514	3",
    "いなさい	う	640	5",
    "いました	う	640	6",
    "いません	う	640	1",
    "かったら	い	1152	7",
    "かったり	い	1152	8",
    "きすぎる	く	513	4",
    "きすぎる	くる	2049	4",
    "ぎすぎる	ぐ	513	4",
    "きちゃう	くる	2050	3",
    "きなさい	く	640	5",
    "きなさい	くる	2176	5",
    "ぎなさい	ぐ	640	5",
    "きました	く	640	6",
    "きました	くる	2176	6",
    "ぎました	ぐ	640	6",
    "きません	く	640	1",
    "きません	くる	2176	1",
    "ぎません	ぐ	640	1",
    "こさせる	くる	2049	9",
    "こられる	くる	2049	10",
    "しすぎる	す	513	4",
    "しすぎる	する	4097	4",
    "しちゃう	す	514	3",
    "しちゃう	する	4098	3",
    "しなさい	す	640	5",
    "しなさい	する	4224	5",
    "しました	す	640	6",
    "しました	する	4224	6",
    "しません	す	640	1",
    "しません	する	4224	1",
    "ちすぎる	つ	513	4",
    "ちなさい	つ	640	5",
    "ちました	つ	640	6",
    "ちません	つ	640	1",
    "っちゃう	う	514	3",
    "っちゃう	く	514	3",
    "っちゃう	つ	514	3",
    "っちゃう	る	514	3",
    "にすぎる	ぬ	513	4",
    "になさい	ぬ	640	5",
    "にました	ぬ	640	6",
    "にません	ぬ	640	1",
    "びすぎる	ぶ	513	4",
    "びなさい	ぶ	640	5",
    "びました	ぶ	640	6",
    "びません	ぶ	640	1",
    "ましょう	る	2432	2",
    "みすぎる	む	513	4",
    "みなさい	む	640	5",
    "みました	む	640	6",
    "みません	む	640	1",
    "りすぎる	る	513	4",
    "りなさい	る	640	5",
    "りました	る	640	6",
    "りません	る	640	1",
    "んじゃう	ぬ	514	3",
    "んじゃう	ぶ	514	3",
    "んじゃう	む	514	3",
    "いそう	う	640	11",
    "いたい	う	516	12",
    "いたら	く	640	7",
    "いだら	ぐ	640	7",
    "いたり	く	640	8",
    "いだり	ぐ	640	8",
    "います	う	640	13",
    "かせる	く	513	9",
    "がせる	ぐ	513	9",
    "かった	い	1152	14",
    "かない	く	516	15",
    "がない	ぐ	516	15",
    "かれる	く	513	16",
    "がれる	ぐ	513	16",
    "きそう	く	640	11",
    "きそう	くる	2176	11",
    "ぎそう	ぐ	640	11",
    "きたい	く	516	12",
    "きたい	くる	2052	12",
    "ぎたい	ぐ	516	12",
    "きたら	くる	2176	7",
    "きたり	くる	2176	8",
    "きます	く	640	13",
    "きます	くる	2176	13",
    "ぎます	ぐ	640	13",
    "くない	い	1028	15",
    "ければ	い	1152	17",
    "こない	くる	2052	15",
    "こよう	くる	2176	18",
    "これる	くる	2049	19",
    "させる	する	4097	9",
    "させる	る	2305	9",
    "さない	す	516	15",
    "される	す	513	20",
    "される	する	4097	16",
    "しそう	す	640	11",
    "しそう	する	4224	11",
    "したい	す	516	12",
    "したい	する	4100	12",
    "したら	す	640	7",
    "したら	する	4224	7",
    "したり	す	640	8",
    "したり	する	4224	8",
    "しない	する	4100	15",
    "します	す	640	13",
    "します	する	4224	13",
    "しよう	する	4224	18",
    "すぎる	い	1025	4",
    "すぎる	る	2305	4",
    "たせる	つ	513	9",
    "たない	つ	516	15",
    "たれる	つ	513	16",
    "ちそう	つ	640	11",
    "ちたい	つ	516	12",
    "ちます	つ	640	13",
    "ちゃう	る	2306	3",
    "ったら	う	640	7",
    "ったら	つ	640	7",
    "ったら	る	640	7",
    "ったり	う	640	8",
    "ったり	つ	640	8",
    "ったり	る	640	8",
    "なさい	る	2432	5",
    "なせる	ぬ	513	9",
    "なない	ぬ	516	15",
    "なれる	ぬ	513	16",
    "にそう	ぬ	640	11",
    "にたい	ぬ	516	12",
    "にます	ぬ	640	13",
    "ばせる	ぶ	513	9",
    "ばない	ぶ	516	15",
    "ばれる	ぶ	513	16",
    "びそう	ぶ	640	11",
    "びたい	ぶ	516	12",
    "びます	ぶ	640	13",
    "ました	る	2432	6",
    "ませる	む	513	9",
    "ません	る	2432	1",
    "まない	む	516	15",
    "まれる	む	513	16",
    "みそう	む	640	11",
    "みたい	む	516	12",
    "みます	む	640	13",
    "らせる	る	513	9",
    "らない	る	516	15",
    "られる	る	2817	10",
    "りそう	る	640	11",
    "りたい	る	516	12",
    "ります	る	640	13",
    "わせる	う	513	9",
    "わない	う	516	15",
    "われる	う	513	16",
    "んだら	ぬ	640	7",
    "んだら	ぶ	640	7",
    "んだら	む	640	7",
    "んだり	ぬ	640	8",
    "んだり	ぶ	640	8",
    "んだり	む	640	8",
    "いた	く	640	14",
    "いだ	ぐ	640	14",
    "いて	く	640	21",
    "いで	ぐ	640	21",
    "えば	う	640	17",
    "える	う	513	19",
    "おう	う	640	18",
    "かず	く	640	22",
    "がず	ぐ	640	22",
    "きた	くる	2176	14",
    "きて	くる	2176	21",
    "くて	い	1152	21",
    "けば	く	640	17",
    "げば	ぐ	640	17",
    "ける	く	513	19",
    "げる	ぐ	513	19",
    "こい	くる	2176	23",
    "こう	く	640	18",
    "ごう	ぐ	640	18",
    "こず	くる	2176	22",
    "さず	す	640	22",
    "した	す	640	14",
    "した	する	4224	14",
    "して	す	640	21",
    "して	する	4224	21",
    "しろ	する	4224	23",
    "せず	する	4224	22",
    "せば	す	640	17",
    "せよ	する	4224	23",
    "せる	す	513	19",
    "そう	い	1152	11",
    "そう	す	640	18",
    "そう	る	2432	11",
    "たい	る	2308	12",
    "たず	つ	640	22",
    "たら	る	2432	7",
    "たり	る	2432	8",
    "った	う	640	14",
    "った	く	640	14",
    "った	つ	640	14",
    "った	る	640	14",
    "って	う	640	21",
    "って	く	640	21",
    "って	つ	640	21",
    "って	る	640	21",
    "てば	つ	640	17",
    "てる	つ	513	19",
    "とう	つ	640	18",
    "ない	る	2308	15",
    "なず	ぬ	640	22",
    "ねば	ぬ	640	17",
    "ねる	ぬ	513	19",
    "のう	ぬ	640	18",
    "ばず	ぶ	640	22",
    "べば	ぶ	640	17",
    "べる	ぶ	513	19",
    "ぼう	ぶ	640	18",
    "ます	る	2432	13",
    "まず	む	640	22",
    "めば	む	640	17",
    "める	む	513	19",
    "もう	む	640	18",
    "よう	る	2432	18",
    "らず	る	640	22",
    "れば	る	7040	17",
    "れる	る	2817	19",
    "ろう	る	640	18",
    "わず	う	640	22",
    "んだ	ぬ	640	14",
    "んだ	ぶ	640	14",
    "んだ	む	640	14",
    "んで	ぬ	640	21",
    "んで	ぶ	640	21",
    "んで	む	640	21",
    "い	いる	384	24",
    "い	う	640	24",
    "い	る	2176	23",
    "え	う	640	23",
    "え	える	384	24",
    "き	きる	384	24",
    "き	く	640	24",
    "ぎ	ぎる	384	24",
    "ぎ	ぐ	640	24",
    "く	い	1152	25",
    "け	く	640	23",
    "け	ける	384	24",
    "げ	ぐ	640	23",
    "げ	げる	384	24",
    "さ	い	1152	26",
    "し	す	640	24",
    "じ	じる	384	24",
    "ず	る	2432	22",
    "せ	す	640	23",
    "せ	せる	384	24",
    "ぜ	ぜる	384	24",
    "た	る	2432	14",
    "ち	ちる	384	24",
    "ち	つ	640	24",
    "て	つ	640	23",
    "て	てる	384	24",
    "て	る	2432	21",
    "で	でる	384	24",
    "な		7040	27",
    "に	にる	384	24",
    "に	ぬ	640	24",
    "ね	ぬ	640	23",
    "ね	ねる	384	24",
    "ひ	ひる	384	24",
    "び	びる	384	24",
    "び	ぶ	640	24",
    "へ	へる	384	24",
    "べ	ぶ	640	23",
    "べ	べる	384	24",
    "み	みる	384	24",
    "み	む	640	24",
    "め	む	640	23",
    "め	める	384	24",
    "よ	る	384	23",
    "り	りる	384	24",
    "り	る	640	24",
    "れ	る	640	23",
    "れ	れる	384	24",
    "ろ	る	384	23"
  ];
  var ruleGroup = [];
  ruleGroup.fromLen = -1;

  // i = 1: skip header
  for (var i = 1; i < buffer.length; ++i) {
    var f = buffer[i].split('\t');

    if (f.length == 1) {
      this.reasons.push(f[0]);
    }
    else if (f.length == 4) {
      var r = { from: f[0], to: f[1], type: f[2], reason: f[3] };
      if (ruleGroup.fromLen != r.from.length) {
        ruleGroup = [];
        ruleGroup.fromLen = r.from.length;
        this.rules.push(ruleGroup);
      }
      ruleGroup.push(r);
    }
  }
};

Deinflector.prototype = {
  go: function(word) {
    var have = [];
    have[word] = 0;

    var r = [{ word: word, type: 0xFF, reason: '' }];
    var i = 0;
    do {
      word = r[i].word;
      var wordLen = word.length;
      var type = r[i].type;

      for (var j = 0; j < this.rules.length; ++j) {
        var ruleGroup = this.rules[j];
        if (ruleGroup.fromLen <= wordLen) {
          var end = word.substr(-ruleGroup.fromLen);
          for (var k = 0; k < ruleGroup.length; ++k) {
            var rule = ruleGroup[k];
            if ((type & rule.type) && (end == rule.from)) {
              var newWord = word.substr(0, word.length - rule.from.length) + rule.to;
              if (newWord.length <= 1) continue;
              var o = {};
              if (have[newWord] != undefined) {
                o = r[have[newWord]];
                o.type |= (rule.type >> 8);
                continue;
              }
              have[newWord] = r.length;
              if (r[i].reason.length) o.reason = this.reasons[rule.reason] + ' &lt; ' + r[i].reason;
              else o.reason = this.reasons[rule.reason];
              o.type = rule.type >> 8;
              o.word = newWord;
              r.push(o);
            }
          }
        }
      }
    } while (++i < r.length);

    return r;
  }
}

function ppcDict() {
  this.loadDictionary();
  this.deinflector = new Deinflector();
}

ppcDict.prototype = {
  config: {},

  setConfig: function(c) {
    this.config = c;
  },

  fileRead: function(url, charset) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return req.responseText;
  },

  fileReadArray: function(name, charset) {
    var a = this.fileRead(name, charset).split('\n');
    // Is this just in case there is blank shit in the file.  It was writtin by Jon though.
    // I suppose this is more robust
    while ((a.length > 0) && (a[a.length - 1].length == 0)) a.pop();
    return a;
  },

  loadDictionary: function() {
    this.wordDict = this.fileRead(browser.extension.getURL("data/dict.dat"));
    this.wordIndex = this.fileRead(browser.extension.getURL("data/dict.idx"));

    this.edict = this.fileRead(browser.extension.getURL("data/edict.dat"));
    this.kanaIndex = this.fileRead(browser.extension.getURL("data/kana.idx"));
    this.kanjiIndex = this.fileRead(browser.extension.getURL("data/kanji.idx"));
  },

  getUniqueArray: function(arr) {
    var a = [];
      var l = arr.length;
      for(var i=0; i<l; i++) {
        for(var j=i+1; j<l; j++) {
          // If this[i] is found later in the array
          if (arr[i] === arr[j])
            j = ++i;
        }
        a.push(arr[i]);
      }
      return a;
  },

  indexSearch: function (book, word) {
    var hit, k, start, end;
    var results = [];
    var indexString;
    var hanzisep = "\u30FB";
    var indexsep = "\uFF1A";

    //find all hits for traditional characters
    hit = book.indexOf( "\n" + word + hanzisep);
    while (hit != -1) {
      start = book.indexOf(indexsep, hit) + 1;
      end = book.indexOf("\n", start);
      indexString = book.substr(start, end - start);
      results.push(parseInt(indexString));

      hit = book.indexOf( "\n" + word + hanzisep, hit+1);
    }

    //find all hits for simplified characters
    hit = book.indexOf(hanzisep + word + indexsep);
    while (hit != -1) {
      start = book.indexOf(indexsep, hit) + 1;
      end = book.indexOf("\n", start);
      indexString = book.substr(start, end - start);
      results.push(parseInt(indexString));

      hit = book.indexOf(hanzisep + word + indexsep, hit+1);
    }

    return this.getUniqueArray(results).sort();
  },

  indexSearch2: function (book, word) {
    var hit, k, start, end;
    var results = [];
    var indexString;
    var indexsep = "\uFF1A";

    //find all hits
    hit = book.indexOf( "\n" + word + indexsep);
    while (hit != -1 && results.length < 10) {
      start = book.indexOf(indexsep, hit) + 1;
      end = book.indexOf("\n", start);
      indexString = book.substr(start, end - start);
      results.push(parseInt(indexString));

      hit = book.indexOf( "\n" + word + indexsep, hit+1);
    }

    return this.getUniqueArray(results).sort();
  },

  wordSearch: function (word) {
    var i;

    var entryobj = {};
    entryobj.data = [];

    var rawentries = [];
    while (word.length > 0) {
      //hits = start of the lines in the dict where the entries are
        var hits = this.indexSearch(this.wordIndex, word);

      for (i = 0; i < hits.length; i++) {
        var end = this.wordDict.indexOf("\n", hits[i]) - 1;
        var entryline = this.wordDict.substr(hits[i], end - hits[i]);
        rawentries.push(entryline);
      }
      word = word.substr(0, word.length - 1);
    }

    entryobj.matchLen = 0;
    for (i = 0; i < rawentries.length; i++) {
      //set highlight length to longest match
      var hanziLen = rawentries[i].indexOf(" ");
      if (hanziLen > entryobj.matchLen)
        entryobj.matchLen = hanziLen;

      entryobj.data.push([rawentries[i], null]);
    }
    return entryobj;
    },

  wordSearchJP: function (word) {
    var i;

    console.log("TODO: deinflect " + word + " and lookup candidates");
    var entryobj = {};
    entryobj.data = [];

    var rawentries = [];
    // TODO: do lookups with respect to japanese dictionary
    while (word.length > 0) {
      //hits = start of the lines in the dict where the entries are
      var hits1 = this.indexSearch2(this.kanaIndex, word);
      var hits2 = this.indexSearch2(this.kanjiIndex, word);
      var hits = this.getUniqueArray(hits1.concat(hits2));

      for (i = 0; i < hits.length; i++) {
        var end = this.edict.indexOf("\n", hits[i]);
        var entryline = this.edict.substr(hits[i], end - hits[i]);
        rawentries.push(entryline);
        console.log(entryline);
      }
      word = word.substr(0, word.length - 1);
    }

    entryobj.matchLen = 0;
    for (i = 0; i < rawentries.length; i++) {
      //set highlight length to longest match
      var hanziLen = rawentries[i].indexOf(" ");
      if (hanziLen > entryobj.matchLen)
        entryobj.matchLen = hanziLen;

      entryobj.data.push([rawentries[i], null]);
    }

    return entryobj;
  },

  parseCEdictLine: function (entry) {
    var space1 = entry.indexOf(" ");
    var space2 = entry.indexOf(" ", space1 + 1);
    var bracket1 = entry.indexOf("[");
    var bracket2 = entry.indexOf("]");
    var slash1 = entry.indexOf("/");
    var slash2 = entry.lastIndexOf("/");

    var params = {};

    params.trad = entry.substr(0, space1);
    params.simp = entry.substr(space1 + 1, space2 - space1 - 1);
    params.pinyin = this.parsePinyin( entry.substr(bracket1 + 1, bracket2 - bracket1 - 1) );
    params.def = entry.substr(slash1 + 1, slash2 - slash1 - 1);

    return params;
  },

  makeHtml: function(entry) {
    var e;
    var k;

    var trad, simp, pinyin, def;
    var i, j, k;

    if (entry == null) return '';

    var b = [];

    if (entry.title)
      b.push('<div class="w-title">' + entry.title + '</div>');

    for (i = 0; i < entry.data.length; ++i) {
      e = entry.data[i][0].match(/^(.+?)\s+(?:\[(.*?)\])?\s*\/(.+)\//);
      if (!e) continue;

      //trad = e[1].split(" ")[0];
      //simp = e[1].split(" ")[1];
      trad = simp = e[1];
      //pinyin = this.parsePinyin(e[2]);
      pinyin = e[2];

      def = e[3];

      //HANZI
      k = "";
      if ("botht" == ppcMain.config.showhanzi || "boths" == ppcMain.config.showhanzi) {
        var first  = ppcMain.config.showhanzi == "botht" ? trad : simp;
        var second = ppcMain.config.showhanzi == "botht" ? simp : trad;

        //add the repetition dot if trad == simp
        var newsecond = [];
        for (j = 0; j < first.length; j++) {
          if (first[j] == second[j])
            newsecond.push('\u30FB');
          else
            newsecond.push(second[j]);
        }
        second = newsecond.join('');

        if (ppcMain.config.docolors == "yes") {
          //for( j = 0; j < pinyin.tones.length; j++)
          //  k += '<span class="w-hanzi' + pinyin.tones[j] + '">' + first[j] + '</span>';
          //k += '　';
          //for( j = 0; j < pinyin.tones.length; j++)
          //  k += '<span class="w-hanzi' + pinyin.tones[j] + '">' + second[j] + '</span>';
          k += '<span class="w-hanzi3">' + first + '</span>　<span class="w-hanzi3">'　+ second + '</span>';
        }
        else
          k += '<span class="w-hanzi3">' + first + '</span>　<span class="w-hanzi3">'　+ second + '</span>';
      } else {
        var hanzi = ppcMain.config.showhanzi == "simp" ? simp : trad;
        if (ppcMain.config.docolors == "yes") {
          //for( j = 0; j < pinyin.tones.length; j++)
          //  k += '<span class="w-hanzi' + pinyin.tones[j] + '">' + hanzi[j] + '</span>';
          k += '<span class="w-hanzi3">' + hanzi + '</span>';
        } else
          k += '<span class="w-hanzi3">' + hanzi + '</span>';
      }

      //PINYIN
      k += '&#32;&#32; <span class="w-kana">';
      //if      ("tonenums" == ppcMain.config.pinyin) k += pinyin.tonenums  + '</span>';
      //else if ("zhuyin"   == ppcMain.config.pinyin) k += pinyin.zhuyin    + '</span>';
      //else                       k += pinyin.tonemarks + '</span>';
      k += pinyin + '</span>';

      b.push(k);

      //DEFINITION
      def = e[3].replace(/\//g, '; ');
      b.push('<br/><span class="w-def">' + def + '</span>');
    }

    if (entry.more) b.push('...<br/>');

    return b.join('');
  },

  makeText: function(entry, max) {
    var e;
    var b;
    var i, j;
    var t;

    if (entry == null) return '';

    b = [];

    if (max > entry.data.length) max = entry.data.length;
    for (i = 0; i < max; ++i) {
      e = entry.data[i][0].match(/^(.+?)\s+(?:\[(.*?)\])?\s*\/(.+)\//);
      if (!e) continue;

      if (e[2]) {
        b.push(e[1] + '\t' + e[2]);
      }
      else {
        b.push(e[1]);
      }

      t = e[3].replace(/\//g, '; ');
      if (false/* !this.config.wpos */) t = t.replace(/^\([^)]+\)\s*/, '');
      if (false/* !this.config.wpop */) t = t.replace('; (P)', '');
      b.push('\t' + t + '\n');
    }
    return b.join('');
  },

  pinyinref: ['a','ai','an','ang','ao','ba','bai','ban','bang','bao','bei','ben','beng','bi','bian','biao','bie','bin','bing','bo','bu','ca','cai','can','cang','cao','ce','cen','ceng','cha','chai','chan','chang','chao','che','chen','cheng','chi','chong','chou','chu','chua','chuai','chuan','chuang','chui','chun','chuo','ci','cong','cou','cu','cuan','cui','cun','cuo','da','dai','dan','dang','dao','de','deng','di','dian','diang','diao','die','ding','diu','dong','dou','du','duan','dui','dun','duo','e','ei','en','er','fa','fan','fang','fei','fen','feng','fo','fou','fu','ga','gai','gan','gang','gao','ge','gei','gen','geng','gong','gou','gu','gua','guai','guan','guang','gui','gun','guo','ha','hai','han','hang','hao','he','hei','hen','heng','hong','hou','hu','hua','huai','huan','huang','hui','hun','huo','ji','jia','jian','jiang','jiao','jie','jin','jing','jiong','jiu','ju','juan','jue','jun','ka','kai','kan','kang','kao','ke','ken','keng','kong','kou','ku','kua','kuai','kuan','kuang','kui','kun','kuo','la','lai','lan','lang','lao','le','lei','leng','li','lian','liang','liao','lie','lin','ling','liu','long','lou','lu','l\u00FC','luan','l\u00FCe','lun','luo','ma','mai','man','mang','mao','me','mei','men','meng','mi','mian','miao','mie','min','ming','miu','mo','mou','mu','na','nai','nan','nang','nao','ne','nei','nen','neng','ni','nia','nian','niang','niao','nie','nin','ning','niu','nong','nou','nu','n\u00FC','nuan','n\u00FCe','nuo','nun','ou','pa','pai','pan','pang','pao','pei','pen','peng','pi','pian','piao','pie','pin','ping','po','pou','pu','qi','qia','qian','qiang','qiao','qie','qin','qing','qiong','qiu','qu','quan','que','qun','ran','rang','rao','re','ren','reng','ri','rong','rou','ru','ruan','rui','run','ruo','sa','sai','san','sang','sao','se','sei','sen','seng','sha','shai','shan','shang','shao','she','shei','shen','sheng','shi','shong','shou','shu','shua','shuai','shuan','shuang','shui','shun','shuo','si','song','sou','su','suan','sui','sun','suo','ta','tai','tan','tang','tao','te','teng','ti','tian','tiao','tie','ting','tong','tou','tu','tuan','tui','tun','tuo','wa','wai','wan','wang','wei','wen','weng','wo','wu','xi','xia','xian','xiang','xiao','xie','xin','xing','xiong','xiu','xu','xuan','xue','xun','ya','yai','yan','yang','yao','ye','yi','yin','ying','yo','yong','you','yu','yuan','yue','yun','za','zai','zan','zang','zao','ze','zei','zen','zeng','zha','zhai','zhan','zhang','zhao','zhe','zhei','zhen','zheng','zhi','zhong','zhou','zhu','zhua','zhuai','zhuan','zhuang','zhui','zhun','zhuo','zi','zong','zou','zu','zuan','zui','zun','zuo'],
  zhuyinref: ['\u311A','\u311E','\u3122','\u3124','\u3120','\u3105\u311A','\u3105\u311E','\u3105\u3122','\u3105\u3124','\u3105\u3120','\u3105\u311F','\u3105\u3123','\u3105\u3125','\u3105\u30FC','\u3105\u30FC\u3122','\u3105\u30FC\u3120','\u3105\u30FC\u311D','\u3105\u30FC\u3123','\u3105\u30FC\u3125','\u3105\u311B','\u3105\u3128','\u3118\u311A','\u3118\u311E','\u3118\u3122','\u3118\u3124','\u3118\u3120','\u3118\u311C','\u3118\u3123','\u3118\u3125','\u3114\u311A','\u3114\u311E','\u3114\u3122','\u3114\u3124','\u3114\u3120','\u3114\u311C','\u3114\u3123','\u3114\u3125','\u3114','\u3114\u3128\u3125','\u3114\u3121','\u3114\u3128','\u3114\u3128\u311A','\u3114\u3128\u311E','\u3114\u3128\u3122','\u3114\u3128\u3124','\u3114\u3128\u311F','\u3114\u3128\u3123','\u3114\u3128\u311B','\u3118','\u3118\u3128\u3125','\u3118\u3121','\u3118\u3128','\u3118\u3128\u3122','\u3118\u3128\u311F','\u3118\u3128\u3123','\u3118\u3128\u311B','\u3109\u311A','\u3109\u311E','\u3109\u3122','\u3109\u3124','\u3109\u3120','\u3109\u311C','\u3109\u3125','\u3109\u30FC','\u3109\u30FC\u3122','\u3109\u30FC\u3124','\u3109\u30FC\u3120','\u3109\u30FC\u311D','\u3109\u30FC\u3125','\u3109\u30FC\u3121','\u3109\u3128\u3125','\u3109\u3121','\u3109\u3128','\u3109\u3128\u3122','\u3109\u3128\u311F','\u3109\u3128\u3123','\u3109\u3128\u311B','\u311C','\u311F','\u3123','\u3126','\u3108\u311A','\u3108\u3122','\u3108\u3124','\u3108\u311F','\u3108\u3123','\u3108\u3125','\u3108\u311B','\u3108\u3121','\u3108\u3128','\u310D\u311A','\u310D\u311E','\u310D\u3122','\u310D\u3124','\u310D\u3120','\u310D\u311C','\u310D\u311F','\u310D\u3123','\u310D\u3125','\u310D\u3128\u3125','\u310D\u3121','\u310D\u3128','\u310D\u3128\u311A','\u310D\u3128\u311E','\u310D\u3128\u3122','\u310D\u3128\u3124','\u310D\u3128\u311F','\u310D\u3128\u3123','\u310D\u3128\u311B','\u310F\u311A','\u310F\u311E','\u310F\u3122','\u310F\u3124','\u310F\u3120','\u310F\u311C','\u310F\u311F','\u310F\u3123','\u310F\u3125','\u310F\u3128\u3125','\u310F\u3121','\u310F\u3128','\u310F\u3128\u311A','\u310F\u3128\u311E','\u310F\u3128\u3122','\u310F\u3128\u3124','\u310F\u3128\u311F','\u310F\u3128\u3123','\u310F\u3128\u311B','\u3110\u30FC','\u3110\u30FC\u311A','\u3110\u30FC\u3122','\u3110\u30FC\u3124','\u3110\u30FC\u3120','\u3110\u30FC\u311D','\u3110\u30FC\u3123','\u3110\u30FC\u3125','\u3110\u3129\u3125','\u3110\u30FC\u3121','\u3110\u3129','\u3110\u3129\u3122','\u3110\u3129\u311D','\u3110\u3129\u3123','\u310E\u311A','\u310E\u311E','\u310E\u3122','\u310E\u3124','\u310E\u3120','\u310E\u311C','\u310E\u3123','\u310E\u3125','\u310E\u3128\u3125','\u310E\u3121','\u310E\u3128','\u310E\u3128\u311A','\u310E\u3128\u311E','\u310E\u3128\u3122','\u310E\u3128\u3124','\u310E\u3128\u311F','\u310E\u3128\u3123','\u310E\u3128\u311B','\u310C\u311A','\u310C\u311E','\u310C\u3122','\u310C\u3124','\u310C\u3120','\u310C\u311C','\u310C\u311F','\u310C\u3125','\u310C\u30FC','\u310C\u30FC\u3122','\u310C\u30FC\u3124','\u310C\u30FC\u3120','\u310C\u30FC\u311D','\u310C\u30FC\u3123','\u310C\u30FC\u3125','\u310C\u30FC\u3121','\u310C\u3128\u3125','\u310C\u3121','\u310C\u3128','\u310C\u3129','\u310C\u3128\u3122','\u310C\u3129\u311D','\u310C\u3128\u3123','\u310C\u3128\u311B','\u3107\u311A','\u3107\u311E','\u3107\u3122','\u3107\u3124','\u3107\u3120','\u3107\u311C','\u3107\u311F','\u3107\u3123','\u3107\u3125','\u3107\u30FC','\u3107\u30FC\u3122','\u3107\u30FC\u3120','\u3107\u30FC\u311D','\u3107\u30FC\u3123','\u3107\u30FC\u3125','\u3107\u30FC\u3121','\u3107\u3128\u311B','\u3107\u3121','\u3107\u3128','\u310B\u311A','\u310B\u311E','\u310B\u3122','\u310B\u3124','\u310B\u3120','\u310B\u311B','\u310B\u311F','\u310B\u3123','\u310B\u3125','\u310B\u30FC','\u310B\u30FC\u311A','\u310B\u30FC\u3122','\u310B\u30FC\u3124','\u310B\u30FC\u3120','\u310B\u30FC\u311D','\u310B\u30FC\u3123','\u310B\u30FC\u3125','\u310B\u30FC\u3121','\u310B\u3128\u3125','\u310B\u3121','\u310B\u3128','\u310B\u3129','\u310B\u3128\u3122','\u310B\u3129\u311D','\u310B\u3128\u311B','\u310B\u3128\u3123','\u3121','\u3106\u311A','\u3106\u311E','\u3106\u3122','\u3106\u3124','\u3106\u3120','\u3106\u311F','\u3106\u3123','\u3106\u3125','\u3106\u30FC','\u3106\u30FC\u3122','\u3106\u30FC\u3120','\u3106\u30FC\u311D','\u3106\u30FC\u3123','\u3106\u30FC\u3125','\u3106\u3128\u311B','\u3106\u3121','\u3106\u3128','\u3111\u30FC','\u3111\u30FC\u311A','\u3111\u30FC\u3122','\u3111\u30FC\u3124','\u3111\u30FC\u3120','\u3111\u30FC\u311D','\u3111\u30FC\u3123','\u3111\u30FC\u3125','\u3111\u3129\u3125','\u3111\u30FC\u3121','\u3111\u3129','\u3111\u3129\u3122','\u3111\u3129\u311D','\u3111\u3129\u3123','\u3116\u3122','\u3116\u3124','\u3116\u3120','\u3116\u311C','\u3116\u3123','\u3116\u3125','\u3116','\u3116\u3128\u3125','\u3116\u3121','\u3116\u3128','\u3116\u3128\u3122','\u3116\u3128\u311F','\u3116\u3128\u3123','\u3116\u3128\u311B','\u3119\u311A','\u3119\u311E','\u3119\u3122','\u3119\u3124','\u3119\u3120','\u3119\u311C','\u3119\u311F','\u3119\u3123','\u3119\u3125','\u3115\u311A','\u3115\u311E','\u3115\u3122','\u3115\u3124','\u3115\u3120','\u3115\u311C','\u3115\u311F','\u3115\u3123','\u3115\u3125','\u3115','\u3115\u3121\u3125','\u3115\u3121','\u3115\u3128','\u3115\u3128\u311A','\u3115\u3128\u311E','\u3115\u3128\u3122','\u3115\u3128\u3124','\u3115\u3128\u311F','\u3115\u3128\u3123','\u3115\u3128\u311B','\u3119','\u3119\u3128\u3125','\u3119\u3121','\u3119\u3128','\u3119\u3128\u3122','\u3119\u3128\u311F','\u3119\u3128\u3123','\u3119\u3128\u311B','\u310A\u311A','\u310A\u311E','\u310A\u3122','\u310A\u3124','\u310A\u3120','\u310A\u311C','\u310A\u3125','\u310A\u30FC','\u310A\u30FC\u3122','\u310A\u30FC\u3120','\u310A\u30FC\u311D','\u310A\u30FC\u3125','\u310A\u3128\u3125','\u310A\u3121','\u310A\u3128','\u310A\u3128\u3122','\u310A\u3128\u311F','\u310A\u3128\u3123','\u310A\u3128\u311B','\u3128\u311A','\u3128\u311E','\u3128\u3122','\u3128\u3124','\u3128\u311F','\u3128\u3123','\u3128\u3125','\u3128\u311B','\u3128','\u3112\u30FC','\u3112\u30FC\u311A','\u3112\u30FC\u3122','\u3112\u30FC\u3124','\u3112\u30FC\u3120','\u3112\u30FC\u311D','\u3112\u30FC\u3123','\u3112\u30FC\u3125','\u3112\u3129\u3125','\u3112\u30FC\u3121','\u3112\u3129','\u3112\u3129\u3122','\u3112\u3129\u311D','\u3112\u3129\u3123','\u30FC\u311A','\u30FC\u311E','\u30FC\u3122','\u30FC\u3124','\u30FC\u3120','\u30FC\u311D','\u30FC','\u30FC\u3123','\u30FC\u3125','\u30FC\u311B','\u3129\u3125','\u30FC\u3121','\u3129','\u3129\u3122','\u3129\u311D','\u3129\u3123','\u3117\u311A','\u3117\u311E','\u3117\u3122','\u3117\u3124','\u3117\u3120','\u3117\u311C','\u3117\u311F','\u3117\u3123','\u3117\u3125','\u3113\u311A','\u3113\u311E','\u3113\u3122','\u3113\u3124','\u3113\u3120','\u3113\u311C','\u3113\u311F','\u3113\u3123','\u3113\u3125','\u3113','\u3113\u3128\u3125','\u3113\u3121','\u3113\u3128','\u3113\u3128\u311A','\u3113\u3128\u311E','\u3113\u3128\u3122','\u3113\u3128\u3124','\u3113\u3128\u311F','\u3113\u3128\u3123','\u3113\u3128\u311B','\u3117','\u3117\u3128\u3125','\u3117\u3121','\u3117\u3128','\u3117\u3128\u3122','\u3117\u3128\u311F','\u3117\u3128\u3123','\u3117\u3128\u311B'],

  isVowel: function (letter) {
    if( letter == "a" || letter == "e" || letter == "i" ||
        letter == "o" || letter == "u" ) return true;
    return false;
    },

  parsePinyin: function(pinyin) {
      //pinyin info
      var _a = [ "\u0101", "\u00E1", "\u01CE", "\u00E0", "a"];
      var _e = [ "\u0113", "\u00E9", "\u011B", "\u00E8", "e"];
      var _i = [ "\u012B", "\u00ED", "\u01D0", "\u00EC", "i"];
      var _o = [ "\u014D", "\u00F3", "\u01D2", "\u00F2", "o"];
      var _u = [ "\u016B", "\u00FA", "\u01D4", "\u00F9", "u"];
      var _v = [ "\u01D6", "\u01D8", "\u01DA", "\u01DC", "\u00FC"];
    var ztone = ['', '\u02CA', '\u02C7', '\u02CB', '\u30FB'];

    var result = { };
    result.tones = [ ];
    var zhuyin = [ ];
    var tonenums = [ ];

      pinyin = pinyin.split(" ");
      for( var j = 0; j < pinyin.length; j++){
        var pin = pinyin[j].replace('u:', "\u00FC");
        var tone = 4;

      tonenums.push(pin);

        if( pin.indexOf("1") != -1 ) tone = 0;
        else if( pin.indexOf("2") != -1 ) tone = 1;
        else if( pin.indexOf("3") != -1 ) tone = 2;
        else if( pin.indexOf("4") != -1 ) tone = 3;

        result.tones.push(tone+1);

        var prepin = pin.substring(0, pin.length -1);
      var indx = this.pinyinref.indexOf(prepin.toLowerCase());
        zhuyin.push(this.zhuyinref[indx] + ztone[tone]);

        if( pin.indexOf("a") != -1 ) pin = pin.replace( "a", _a[tone] );
        else if( pin.indexOf("e") != -1 ) pin = pin.replace( "e", _e[tone] );
        else if( pin.indexOf("ou") != -1 ) pin = pin.replace( "o", _o[tone] );
        else {
         for( var k = pin.length - 1; k >= 0; k--){
          if( this.isVowel(pin[k]) ){
            switch(pin[k]){
             case 'i':  pin = pin.replace( "i", _i[tone] ); break;
             case 'o':  pin = pin.replace( "o", _o[tone] ); break;
             case 'u':  pin = pin.replace( "u", _u[tone] ); break;
             case '\u00FC': pin = pin.replace( "\u00FC", _v[tone] ); break;
             default: alert("some kind of wierd vowel");
            }
          break;
          }
         }
        }
      pinyin[j] = pin.substring(0, pin.length - 1);//strip the number
      }
      result.tonemarks = pinyin.join(" ");
      result.zhuyin = zhuyin.join(" ");
      result.tonenums = tonenums.join(" ");
       return result;
  },
};
