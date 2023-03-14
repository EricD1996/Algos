class Solution {
public:
    int countSubstrings(string s) {
        vector<string> palindromes;
        for(int i = 0; i < s.length(); ++i) {
            int left = i;
            int right = i;
            bool pali = false;
            while(left >= 0 && right < s.length()) {
                if(s[left] == s[right]) {
                    --left;
                    ++right;
                    pali = true;
                }
            }
            if(pali == true){
                palindromes.push_back(s.substr(left + 1, right -left));
                pali = false;
            }
            left = i;
            right = i+1;
            while(left >= 0 && right < s.length()) {
                if(s[left] == s[right]) {
                    --left;
                    ++right;
                } else {
                    palindromes.push_back(s.substr(left + 1, right -left));
                    break;
                }
            }
        }

        for(auto i : palindromes)
            cout << i << endl;

        return 0;
    }
};