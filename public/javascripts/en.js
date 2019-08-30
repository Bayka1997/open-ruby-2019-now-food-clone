I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"enums":{"user":{"roles":{"admin":"Admin","manager":"Manager","normal":"Customer"}}},"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"admin":{"users":{"destroy":{"error":"Delete fail","success":"Delete success"},"form":{"address":"Address","email":"Email","name":"Name","password":"Password","password_confirmation":"Password confirmation","phone":"Phone","reset":"Reset","submit":"Submit"},"index":{"avata":"Avata","close":"Close","edit_user":"Edit user","email":"Email","home":"Home","name":"Name","new_user":"Create new user","role":"Role","show_user":"Showr user","stt":"STT"},"search":{"email":"Email","name":"Name","role":"Role","search":"Search","search_by_name_email":"Search by name and email"},"user":{"sure":"Sure delete ?"}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"edit":{"change_my_password":"Change my password","change_your_password":"Change your password","characters_minimum":"%{count} characters_minimum","new_password":"new-password","password":"password","password_confirmation":"Password Confirmation"},"new":{"email":"Email","forgot_password":"Forgot your password?","password":"Password","send_reset":"Send reset"},"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","edit":{"back":"Back","characters_minimum":"%{count} characters_minimum","comfirm":"Are you sure?","confirm_change":"we need your current password to confirm your changes","current_password":"Current password","edit":"Edit","email":"Email","new_password":"new-password","not_change":"leave blank if you don't want to change it","password":"password","password_confirmation":"Password Confirmation","update":"Update","waiting_confirmation":"Currently waiting confirmation for:"},"new":{"characters_minimum":"%{count} characters_minimum","current_password":"current-password","email":"Email","name":"Name","new_password":"new-password","password":"Password","password_confirmation":"Password Confirmation","sign_up":"Sign up"},"signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully.","updated_but_not_signed_in":"Your account has been updated successfully, but since your password was changed, you need to sign in again"},"sessions":{"already_signed_out":"Signed out successfully.","new":{"current_password":"current password","email":"Email","login":"Login","password":"Password","remember_me":"Remember me"},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"shared":{"links":{"forgot_password":"Forgot password","login":"Login","sign_up":"Register"}},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"layouts":{"admin":{"footer":{"description":"© 2019 Elegent Admin by wrappixel.com"},"header":{"home":"Home","placeholder_search":"Search \u0026amp; enter"},"slider":{"dashboard":"Dashboard","user":"User"}},"banner":{"delicious_cheap":"Delicious and Cheap","description":"Lorem ipsum dolor sit amet, consectetur adipisicing.","order":"Order products","perfect_choise":"Perfect choice"},"footer":{"about":"About","contact":"Contact Us","description":"Lorem ipsum dolor sit amet, consectetur adipisicing.","phone":"0962199791"},"header":{"admin":"Admin","edit":"Edit profile","english":"English","home":"Home","language":"Languages","login":"Login","logout":"Logout","register":"Register","vietnamese":"Vietnamese"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"ransack":{"all":"all","and":"and","any":"any","asc":"ascending","attribute":"attribute","combinator":"combinator","condition":"condition","desc":"descending","or":"or","predicate":"predicate","predicates":{"blank":"is blank","cont":"contains","cont_all":"contains all","cont_any":"contains any","does_not_match":"doesn't match","does_not_match_all":"doesn't match all","does_not_match_any":"doesn't match any","end":"ends with","end_all":"ends with all","end_any":"ends with any","eq":"equals","eq_all":"equals all","eq_any":"equals any","false":"is false","gt":"greater than","gt_all":"greater than all","gt_any":"greater than any","gteq":"greater than or equal to","gteq_all":"greater than or equal to all","gteq_any":"greater than or equal to any","in":"in","in_all":"in all","in_any":"in any","lt":"less than","lt_all":"less than all","lt_any":"less than any","lteq":"less than or equal to","lteq_all":"less than or equal to all","lteq_any":"less than or equal to any","matches":"matches","matches_all":"matches all","matches_any":"matches any","not_cont":"doesn't contain","not_cont_all":"doesn't contain all","not_cont_any":"doesn't contain any","not_end":"doesn't end with","not_end_all":"doesn't end with all","not_end_any":"doesn't end with any","not_eq":"not equal to","not_eq_all":"not equal to all","not_eq_any":"not equal to any","not_in":"not in","not_in_all":"not in all","not_in_any":"not in any","not_null":"is not null","not_start":"doesn't start with","not_start_all":"doesn't start with all","not_start_any":"doesn't start with any","null":"is null","present":"is present","start":"starts with","start_all":"starts with all","start_any":"starts with any","true":"is true"},"search":"search","sort":"sort","value":"value"},"shared":{"error_messages":{"error":{"one":"1 error","other":"%{count} errors"}}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"users":{"add":{"error":"Add user fail","success":"Add user success"},"edit":{"error":"Edit user fail","success":"Edit user success"}},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"activerecord":{"enums":{"user":{"roles":{"admin":"Admin","manager":"Manager","normal":"Customer"}}},"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"admin":{"users":{"destroy":{"error":"Delete fail","success":"Delete success"},"form":{"address":"Address","email":"Email","name":"Name","password":"Password","password_confirmation":"Password confirmation","phone":"Phone","reset":"Reset","submit":"Submit"},"index":{"avata":"Avata","close":"Close","edit_user":"Edit user","email":"Email","home":"Home","name":"Name","new_user":"Create new user","role":"Role","show_user":"Showr user","stt":"STT"},"search":{"email":"Email","name":"Name","role":"Role","search":"Search","search_by_name_email":"Search by name and email"},"user":{"sure":"Sure delete ?"}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"edit":{"change_my_password":"Change my password","change_your_password":"Change your password","characters_minimum":"%{count} characters_minimum","new_password":"new-password","password":"password","password_confirmation":"Password Confirmation"},"new":{"email":"Email","forgot_password":"Forgot your password?","password":"Password","send_reset":"Send reset"},"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","edit":{"back":"Back","characters_minimum":"%{count} characters_minimum","comfirm":"Are you sure?","confirm_change":"we need your current password to confirm your changes","current_password":"Current password","edit":"Edit","email":"Email","new_password":"new-password","not_change":"leave blank if you don't want to change it","password":"password","password_confirmation":"Password Confirmation","update":"Update","waiting_confirmation":"Currently waiting confirmation for:"},"new":{"characters_minimum":"%{count} characters_minimum","current_password":"current-password","email":"Email","name":"Name","new_password":"new-password","password":"Password","password_confirmation":"Password Confirmation","sign_up":"Sign up"},"signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully.","updated_but_not_signed_in":"Your account has been updated successfully, but since your password was changed, you need to sign in again"},"sessions":{"already_signed_out":"Signed out successfully.","new":{"current_password":"current password","email":"Email","login":"Login","password":"Password","remember_me":"Remember me"},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"shared":{"links":{"forgot_password":"Forgot password","login":"Login","sign_up":"Register"}},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"layouts":{"admin":{"footer":{"description":"© 2019 Elegent Admin by wrappixel.com"},"header":{"home":"Home","placeholder_search":"Search \u0026amp; enter"},"slider":{"dashboard":"Dashboard","user":"User"}},"banner":{"delicious_cheap":"Delicious and Cheap","description":"Lorem ipsum dolor sit amet, consectetur adipisicing.","order":"Order products","perfect_choise":"Perfect choice"},"footer":{"about":"About","contact":"Contact Us","description":"Lorem ipsum dolor sit amet, consectetur adipisicing.","phone":"0962199791"},"header":{"admin":"Admin","edit":"Edit profile","english":"English","home":"Home","language":"Languages","login":"Login","logout":"Logout","register":"Register","vietnamese":"Vietnamese"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"ransack":{"all":"all","and":"and","any":"any","asc":"ascending","attribute":"attribute","combinator":"combinator","condition":"condition","desc":"descending","or":"or","predicate":"predicate","predicates":{"blank":"is blank","cont":"contains","cont_all":"contains all","cont_any":"contains any","does_not_match":"doesn't match","does_not_match_all":"doesn't match all","does_not_match_any":"doesn't match any","end":"ends with","end_all":"ends with all","end_any":"ends with any","eq":"equals","eq_all":"equals all","eq_any":"equals any","false":"is false","gt":"greater than","gt_all":"greater than all","gt_any":"greater than any","gteq":"greater than or equal to","gteq_all":"greater than or equal to all","gteq_any":"greater than or equal to any","in":"in","in_all":"in all","in_any":"in any","lt":"less than","lt_all":"less than all","lt_any":"less than any","lteq":"less than or equal to","lteq_all":"less than or equal to all","lteq_any":"less than or equal to any","matches":"matches","matches_all":"matches all","matches_any":"matches any","not_cont":"doesn't contain","not_cont_all":"doesn't contain all","not_cont_any":"doesn't contain any","not_end":"doesn't end with","not_end_all":"doesn't end with all","not_end_any":"doesn't end with any","not_eq":"not equal to","not_eq_all":"not equal to all","not_eq_any":"not equal to any","not_in":"not in","not_in_all":"not in all","not_in_any":"not in any","not_null":"is not null","not_start":"doesn't start with","not_start_all":"doesn't start with all","not_start_any":"doesn't start with any","null":"is null","present":"is present","start":"starts with","start_all":"starts with all","start_any":"starts with any","true":"is true"},"search":"search","sort":"sort","value":"value"},"shared":{"error_messages":{"error":{"one":"1 error","other":"%{count} errors"}}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"users":{"add":{"error":"Add user fail","success":"Add user success"},"edit":{"error":"Edit user fail","success":"Edit user success"}},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
